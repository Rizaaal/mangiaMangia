// npm install mysql2
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
  //creare un database locale + utente e password uguali a queste
  host: 'localhost',
  user: 'mmadmin',
  password: 'password',
  database: 'mangiaMangiadb'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`database mangiaMangiadb connected`);
  }
});

app.get('/api/menu', (req, res) => {
  const menu = connection.query(
    'SELECT * FROM menuRistorante;',
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/api/menu/hamburgers', (req, res) => {
  const menu = connection.query(
    `SELECT * FROM menuRistorante
    WHERE sezione = 'Hamburgers';`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/api/menu/giapponese', (req, res) => {
  const menu = connection.query(
    `SELECT * FROM menuRistorante
    WHERE sezione = 'Giapponese';`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/api/menu/primi', (req, res) => {
  const menu = connection.query(
    `SELECT * FROM menuRistorante
    WHERE sezione = 'primi';`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/api/menu/pizze', (req, res) => {
  const menu = connection.query(
    `SELECT * FROM menuRistorante
    WHERE sezione = 'pizze';`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/api/menu/bevande', (req, res) => {
  const menu = connection.query(
    `SELECT * FROM menuRistorante
    WHERE sezione = 'bevande';`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/api/menu/starters', (req, res) => {
  const menu = connection.query(
    `SELECT * FROM menuRistorante
    WHERE sezione = 'starters';`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
