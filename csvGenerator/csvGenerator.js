const csv = require('fast-csv');
const fs = require('fs');
const faker = require('faker');

const ws = fs.createWriteStream('generatedRecords.csv');
const csvStream = csv.format({ headers: true });
csvStream.pipe(ws);


function* unlimitedRecords() {
  let experienceNumber = 0;
  while (true) {
    if (experienceNumber !== 10000) {
      experienceNumber += 1;
    } else {
      experienceNumber = 1;
    }
    const picNumber = Math.floor(Math.random() * 200) + 1;
    yield {
      photoUrl: `https://rybnb.s3-us-west-1.amazonaws.com/${picNumber}.jpg`,
      alt: faker.random.word(),
      username: faker.name.firstName(),
      experienceId: experienceNumber,
    };
  }
}

const allTheRecords = unlimitedRecords();

function writeTenMillionRecords(callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      const data = allTheRecords.next().value;
      i -= 1;
      if (i === 0) {
        csvStream.write(data, callback);
      } else {
        ok = csvStream.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      csvStream.once('drain', write);
    }
  }
  write();
}

writeTenMillionRecords(() => {
  csvStream.end();
});
