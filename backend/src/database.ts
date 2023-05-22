import mysql, { Connection } from 'mysql2';

export const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '26524649rbk',
  database: 'zara',
});



