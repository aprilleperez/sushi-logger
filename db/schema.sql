DROP DATABASE IF EXISTS sushi_db;
CREATE DATABASE sushi_db;
USE sushi_db;

CREATE TABLE sushis
(
	id int NOT NULL AUTO_INCREMENT,
	sushi_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);