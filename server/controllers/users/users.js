const addUserQuery = require('../../database/query/users/addUserQuery');
const validator = require('../../validation/validator');
const signUpSchema = require('../../validation/schemas/authSchema');
const { hashPassword } = require('../../utils/helpers/authHelpers');

const addUserController = (req, res) => {
  const { username, email, password } = req.body;
  /*
    first we validate the data, 
    then we hash the password
    then we add the user to the database
    then we redirect the user to the login page
    if any error was thrown by theses function, 
    we catch in the last .catch() clause
    and send a 500 server error
  */
  const result = validator(signUpSchema, { username, email, password });

  if (!result.isValid) {
    res.status(400).json({
      message: `validation error ${result.error.details[0].message}`,
    });
    return;
  }

  hashPassword(password)
    .then((hashedPassword) => {
      addUserQuery({ username, email, password: hashedPassword })
        .then(() => {
          res.redirect('/login');
          //TODO: send the login page
        })
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'Something went wrong',
      });
    });
};

module.exports = addUserController;
