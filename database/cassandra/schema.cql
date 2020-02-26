Drop keyspace airbnb;

CREATE KEYSPACE airbnb
	WITH replication = {
		'class': 'SimpleStrategy',
		'replication_factor': '1'
	} AND durable_writes = 'true';

USE airbnb;

CREATE TABLE photos (
    photoid int PRIMARY KEY,
    photourl text,
    alt text,
    username text,
    experienceid int
);
