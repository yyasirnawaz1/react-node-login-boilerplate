import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: 'nursing-home-db',
});

export default pool;
