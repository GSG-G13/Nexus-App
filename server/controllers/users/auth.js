const loginQuery = require('../../database/query/users/loginQuery');

const {
  generateAccessToken,
  comparePasswords,
} = require('../../utils/helpers/authHelpers');

const loginController = (req, res) => {
  const { email, password } = req.body;
  /*
    Note that, you there's no need to validate login data as 
    it's not going to be stored in the database\
  */
  /*
   first we check if there exists a user with this email
   then we compare the password with the hashed password
   then we generate a token and set it in the cookie
  */

  loginQuery({ email })
    .then((data) => {
      if (data.rows.length === 0) {
        res.status(400).json({ message: 'Please Signup Before Login' });
      }
      comparePasswords(password, data.rows[0].password)
        .then(() => {
          generateAccessToken({
            data: data.rows[0].email,
          })
            .then((token) => {
              res
                .cookie('access_token', token)
                .json({ data: data.rows, msg: 'Logged in successfully' });
            })
            .catch((err) => {
              res.status(500).json({ message: 'Something went wrong' });
            });
        })
        .catch(() => {
          res.status(400).json({ message: 'Invalid Credentials' });
        });
    })
    .catch(() => {
      res.status(400).send('No Email Found');
    });
};

module.exports = loginController;
