-- Clean up the DB list
DROP DATABASE IF EXISTS movies_db;

-- create the DB and move to it
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies(
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    review TEXT;
    movie_id INT;
    FOREIGN KEY (movie_id)
    REFERENCES (movies.id)
    ON DELETE SET NULL
);
