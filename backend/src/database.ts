import mysql, { Connection } from 'mysql2';

export const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yassine1998.',
  database: 'zara',
});



