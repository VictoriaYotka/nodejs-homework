const Joi = require('joi');
const { emailRegExp } = require('../constants')

const registerUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().default("starter"),
});

const loginUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
});

module.exports =  {
  registerUserSchema,
  loginUserSchema,
  emailSchema,
};