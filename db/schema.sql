CREATE DATABASE sandwiches_db;
USE sandwiches_db;
CREATE TABLE sandwiches(
    id INT AUTO_INCREMENT NOT NULL,
    sandwich_name VARCHAR(30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);