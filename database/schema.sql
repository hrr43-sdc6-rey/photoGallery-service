DROP DATABASE IF EXISTS guestphotos;

CREATE DATABASE guestphotos;

USE guestphotos;

CREATE TABLE photos (
  photo_id int NOT NULL AUTO_INCREMENT,
  photo_url varchar(200) NOT NULL,
  username varchar(40) NOT NULL,
  experience_id int NOT NULL,
  PRIMARY KEY(photo_id)
);