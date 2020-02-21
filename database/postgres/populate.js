const csv = require('@fast-csv/parse');
const fs = require('fs');
const stream = require('stream');
const { Pool } = require('pg');
const config = require('./config.js');

(async () => {
  const pool = new Pool(config);
  const client = await pool.connect();

  const loadStream = new stream.Writable();
  let cache = [];
  loadStream._write = async (chunk, encoding, done) => {
    const query = 'INSERT INTO photos (photoUrl, alt, username, experienceId) VALUES ($1, $2, $3, $4)';
    const parsed = JSON.parse(chunk);
    const values = [parsed.photoUrl, parsed.alt, parsed.username, parsed.experienceId];
    // if (cache.length < 10000) {
    //  cache.push(values);
    // } else {
      try {
        await client.query(query, values);
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK');
        client.release();
        throw e;
      }
    //  cache = [values];
    // }
    done();
  };

  fs.createReadStream('../../csvGenerator/generatedRecords.csv')
    .pipe(csv.parse({ headers: true })
      .transform((data) => JSON.stringify(data)))
    .pipe(loadStream)
    .on('error', (e) => console.error(e))
    .on('finish', () => {
      client.release();
      console.log('UPLOAD COMPLETE :D');
    });
})().catch((e) => console.error(e.stack));
