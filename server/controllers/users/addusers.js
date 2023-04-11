const Joi = require('joi')
const bcrypt = require("bcryptjs");
const connection = require("../../database/config/connection")


const validateSignup = (userData) => {
    const signupSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  password: Joi.string().min(8).max(30).pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$')).required(),
  confirmPassword: Joi.ref('password'),
})

const {error} =  signupSchema.validate({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

if(error) {
    console.log({error})
    return false;


}else {
 return true;
}
}

const hashPassword = (password, callback) => {
    bcrypt.hash(password, 10)
      .then((hashedPassword) => callback(null, hashedPassword))
      .catch((err) => callback(err));
  };

const addUserController = (req, res) => {
  const { username, email, password } = req.body;
 const validationResult =  validateSignup({username, email, password});

    if(!validationResult) {
        res.status(400).json({
            error: 'data is not valid',
          });
    }

    // validation pass

    hashPassword(password, (err, hashed) => {
        if(err) {
            res.status(400).json({
                message: 'something went wrong',
              });
        } else {
            const sql = {
                text: 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *;', 
                values: [ email, username, hashed]
            }
            return connection.query(sql);
            }
        
      })

  res.status(200).json({
    message: 'signup sccusseful',
  });

}

module.exports = addUserController;
