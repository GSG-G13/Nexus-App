const { connection } = require('./config');

const addPostQuery = ({ imageURL, captionInput, user_Id }) => {
  const sql = {
    text: 'INSERT INTO posts(post_image, caption, user_id) VALUES ($1, $2, $3) RETURNING *',
    values: [ imageURL, captionInput, user_Id ]
  }
  return connection.query(sql)
}

module.exports = addPostQuery;