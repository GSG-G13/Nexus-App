const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/*
Instead of using callback function
we return a new Promise so that we can make use of the 
.then().catch() syntax
*/

const hashPassword = (password) => (
  new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
  })
)

const generateAccessToken = (payload) => new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  }
);

const comparePasswords = (password, hashedPassword) => new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
});

module.exports = { hashPassword, generateAccessToken, comparePasswords };