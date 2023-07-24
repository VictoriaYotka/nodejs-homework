const Joi = require('joi');

const contactSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `"name" must exist`,
    }),
    email: Joi.string().email().required().messages({
      "any.required": `"email" must exist`,
    }),
   phone: Joi.string().required().messages({
    "any.required": `"phone" must exist`,
    }),
  })

module.exports =  contactSchema;