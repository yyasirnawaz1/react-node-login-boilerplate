import pool from '../utils/Database.js';

export const authenticate = async (email, password) => {
  const user = await pool.query(
    'SELECT * from users where (email=$1 OR username=$1) AND password=$2',
    [email, password]
  );
  return user.rows.length ? user.rows[0] : undefined;
};
