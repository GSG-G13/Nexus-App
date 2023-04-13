const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  password: Joi.string().min(8).max(30).required(),
  confirmPassword: Joi.ref('password'),
});

module.exports =  signUpSchema;
