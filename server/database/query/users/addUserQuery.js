const connection = require('../../config/connection');

const addUserQuery = (userData) => {
  const { email, username, password } = userData;
  const sql = {
    text: 'INSERT INTO users(email, username, password) VALUES ($1, $2, $3) RETURNING *;',
    values: [email, username, password],
  };
  return connection.query(sql);
};

module.exports = addUserQuery;
