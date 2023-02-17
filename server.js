const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'shaggy',
      // MySQL password
      password: 'vogon',
      database: 'movies_db'
    },
    console.log(`Connected to the Movies database.`)
  );

  // query database for list of movies

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', function (err, results) {
    res.json(results);
    });
});

app.post('/api/add-movie', (req, res) => {
    const { movie_name, review } = req.body;
    console.log(movie_name);
    db.query(`INSERT INTO movies (movie_name) VALUE (${'name'})`, function(err, results) {
        console.log("Updated");
        res.json(results);
    });
    });

// app.post('/api/update-review', (req, res) => {
//     const 
// });

app.delete('/api/movie/:id', (req, res) => {
});


  // query databa

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);