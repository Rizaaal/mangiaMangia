// npm install mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
  //creare una connessione con utente e password uguali a queste
  host: 'localhost',
  user: 'mmadmin',
  password: 'password',
  database: 'mangiaMangiadb'
});


connection.connect(err => {
  if (err) {
    console.log(err);
  } else {  
    console.log(`database mangiaMangiadb connected`);
  };
});