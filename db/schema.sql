-- Clean up the DB list
DROP DATABASE IF EXISTS movies_db;

-- create the DB and move to it
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    movie_name VARCHAR(100)
);

CREATE TABLE reviews (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    review TEXT,
    movie_id INT,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);
