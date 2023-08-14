const Joi = require('joi');

const userSchema = Joi.object({
    password: Joi.string().required().messages({
        "any.required": `"password" must exist`,
    }),
    email: Joi.string().email().required().messages({
      "any.required": `"email" must exist`,
    }),
    subscription: Joi.string().required().messages({
    "any.required": `"subscription" must exist`,
    }),
    token: Joi.string(). required(),
  })



module.exports =  userSchema;