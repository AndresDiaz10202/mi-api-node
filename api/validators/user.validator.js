const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(100).required(),
  password: Joi.string().min(4).required()
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = { registerSchema, loginSchema };
