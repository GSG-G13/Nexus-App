const loginQuery = require("../../database/query/users/loginQuery");
const loginSchema = require("../../utils/validation/loginSchema");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const loginController = (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details,
      },
    });
    return;
  }

  loginQuery({ email })
    .then((data) => {
      console.log(data.rows);
      if(data.rows.length === 0){
        res.json({message: 'Please Signup Before Login'})
      }
      bcrypt
        .compare(req.body.password, data.rows[0].password)
        .then((result) => {
          console.log(result);
          const access_token = jwt.sign(
            {
              data: data.rows[0].email,
            },
            "potato"
          );
          res.cookie("access_token", access_token).end();
        });
    })
    .catch(console.log);
};

module.exports = loginController;
