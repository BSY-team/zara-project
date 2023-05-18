import mysql, { Connection } from 'mysql2';

const conn: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'soumaya',
  database: 'zara',
});

conn.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database!');
});

module.exports = conn;