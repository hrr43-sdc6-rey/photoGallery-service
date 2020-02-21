const { performance } = require('perf_hooks');

const t0 = performance.now();
const csv = require('fast-csv');
const fs = require('fs');
const faker = require('faker');

const ws = fs.createWriteStream('generatedCassandra.csv');
const csvStream = csv.format({ headers: false });
csvStream.pipe(ws);

function writeTenMillionRecords(callback) {
  let i = 0;
  let experienceNumber = 0;
  function write() {
    let ok = true;
    do {
      i += 1;
      if (experienceNumber <= 10000) {
        experienceNumber += 1;
      } else {
        experienceNumber = 1;
      }
      const picNumber = Math.floor(Math.random() * 200) + 1;
      const data = {
        photoid: i,
        alt: faker.random.word(),
        experienceid: experienceNumber,
        photourl: `https://rybnb.s3-us-west-1.amazonaws.com/${picNumber}.jpg`,
        username: faker.name.firstName(),
      };
      if (i === 10000001) {
        csvStream.write(data, callback);
      } else {
        ok = csvStream.write(data);
      }
    } while (i < 10000001 && ok);
    if (i < 10000001) {
      csvStream.once('drain', write);
    }
  }
  write();
}

writeTenMillionRecords(() => {
  csvStream.end();
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
});
