const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

async function createTable() {
  await pool.query('DROP TABLE IF EXISTS photos');
  await pool.query(`
    CREATE TABLE photos (
    photoId SERIAL PRIMARY KEY,
    photoUrl varchar(200) NOT NULL,
    alt varchar(125) NOT NULL,
    username varchar(40) NOT NULL,
    experienceId integer NOT NULL
    );
  `);
  await pool.end();
}

createTable();
