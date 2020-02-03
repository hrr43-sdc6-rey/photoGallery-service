const mysql = require('mysql');
const config = require('../config/config.js');
const db = require ('./index.js');

const faker = require('faker');


function getRandomInt(min1, max1) {
  const min = Math.ceil(min1);
  const max = Math.floor(max1);
  return Math.floor(Math.random() * (max - min)) + min;
}

const seedData = () => {

  for (let ex = 1; ex < 101; ex += 1) {
    let photoCount = getRandomInt(9, 21);
    for (let k = 1; k <= photoCount; k += 1) {

      let photoIdentification = getRandomInt(100, 201)
      const photoPath = `https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/photo/${photoIdentification}.jpg`;
      const fakeName = faker.name.firstName();
      const fakeAlt = faker.random.word();

      db.db.query(`INSERT INTO photos (photoUrl, alt, username, experienceId) VALUES ('${photoPath}','${fakeAlt}', '${fakeName}', ${ex})`, (err, result) => {
        if (err) {
          console.log('SEED ERROR: ', err);
        } else {
          console.log('Seed Success: ', result);
        }
      })
    }
  }
};

seedData();

module.exports = seedData;

// const seedData = [
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/bruna-branco-t8hTmte4O_g-unsplash.jpg',
//     username: 'Carl',
//     experience_id: 1
//   },
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/christopher-farrugia-8-MWNQdutAU-unsplash.jpg',
//     username: 'Debs',
//     experience_id: 1
//   },
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/daniela-diaz-yv-BJD9Z-Pc-unsplash.jpg',
//     username: 'Ders',
//     experience_id: 1
//   },  {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/fallon-travels-W01Qwuhb_l4-unsplash.jpg',
//     username: 'Morty',
//     experience_id: 2
//   },
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/faruk-kaymak-RH0QUHYPeW4-unsplash.jpg',
//     username: 'Rick',
//     experience_id: 2
//   },
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/fineas-anton-ODdfN4oyRsk-unsplash.jpg',
//     username: 'Summer',
//     experience_id: 2
//   },  {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/gints-gailis-3HAAGbMss_0-unsplash.jpg',
//     username: 'Pedro',
//     experience_id: 3
//   },
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/helena-yankovska-QXSvbDkiJmY-unsplash.jpg',
//     username: 'Uncle Rico',
//     experience_id: 3
//   },
//   {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/james-sutton-US-QIgVzgaE-unsplash.jpg',
//     username: 'Napoleon',
//     experience_id: 3
//   },  {
//     photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/janko-ferlic-specialdaddy-nVPfPXc3eis-unsplash.jpg',
//     username: 'Kip',
//     experience_id: 3
//   }
// ];

// const seedDB = (mockData) => {

//   for (var i = 0; i < mockData.length; i++) {
//     var sqlStatement = `INSERT INTO photos(photo_url, username, experience_id) VALUES ('${mockData[i].photo_url}', '${mockData[i].username}', '${mockData[i].experience_id}')`;
//     db.db.query(sqlStatement, (error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Query Results: ', result);
//       }
//     })
//   }
// };

// seedDB(seedData);
