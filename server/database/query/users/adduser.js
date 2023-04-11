const connection = require("../../config/connection");
const addUser = require('../database/query/users/adduser');

const addUser = (userData)=> {
const {email, username, password} = userData;
const sql = {
    text: 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *;', 
    values: [ email, username, password]
}
return connection.query(sql);
}
module.exports = addUser;