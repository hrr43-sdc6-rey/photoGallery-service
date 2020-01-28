const mysql = require('mysql');
var config = require('../config/config.js');
var db = require ('./index.js');

const seedData =[
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/bruna-branco-t8hTmte4O_g-unsplash.jpg',
    username: 'Carl',
    experience_id: 1
  },
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/christopher-farrugia-8-MWNQdutAU-unsplash.jpg',
    username: 'Debs',
    experience_id: 1
  },
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/daniela-diaz-yv-BJD9Z-Pc-unsplash.jpg',
    username: 'Ders',
    experience_id: 1
  },  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/fallon-travels-W01Qwuhb_l4-unsplash.jpg',
    username: 'Morty',
    experience_id: 2
  },
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/faruk-kaymak-RH0QUHYPeW4-unsplash.jpg',
    username: 'Rick',
    experience_id: 2
  },
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/fineas-anton-ODdfN4oyRsk-unsplash.jpg',
    username: 'Summer',
    experience_id: 2
  },  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/gints-gailis-3HAAGbMss_0-unsplash.jpg',
    username: 'Pedro',
    experience_id: 3
  },
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/helena-yankovska-QXSvbDkiJmY-unsplash.jpg',
    username: 'Uncle Rico',
    experience_id: 3
  },
  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/james-sutton-US-QIgVzgaE-unsplash.jpg',
    username: 'Napoleon',
    experience_id: 3
  },  {
    photo_url: 'https://tlguestphotos.s3-us-west-2.amazonaws.com/teamleia/janko-ferlic-specialdaddy-nVPfPXc3eis-unsplash.jpg',
    username: 'Kip',
    experience_id: 3
  }
]

//function to seed database with mock data
const seedDB = (mockData) => {


  for (var i = 0; i < mockData.length; i++) {

    var sqlStatement = `INSERT INTO photos(photo_url, username, experience_id) VALUES ('${mockData[i].photo_url}', '${mockData[i].username}', '${mockData[i].experience_id}')`;
    db.query(sqlStatement, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Query Results: ', result);
      }
    })
  }
};



seedDB(seedData);