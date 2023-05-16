import mysql, { Connection } from 'mysql2/promise';

const config = {
  host: 'localhost',
  user: 'root',
  password: '26524649rbk',
  database: 'your_database_name',
};

export const connectDatabase = async (): Promise<Connection> => {
  try {
    const connection = await mysql.createConnection(config);
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
