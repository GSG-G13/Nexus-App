const connection = require('../../config');

const getPostsQuery = () => {
    const sql = {
        text: 'SELECT profile_img ,username, post_image, caption, likes FROM posts JOIN users ON posts.user_id = users.id;',
    }
    return connection.query(sql);
};

module.exports = { getPostsQuery };