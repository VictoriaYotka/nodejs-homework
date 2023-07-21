const express = require('express');
const Joi = require('joi');
const { nanoid } = require('nanoid');
const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../../models/contacts')

const router = express.Router()

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

router.get('/', async (req, res, next) => {
  const data = await listContacts();
  res.json({ 
    // message: 'template message',
    data,
    status: 'success',
    code: 200, })
})

router.get('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const data = await getContactById(contactId)
  data === null 
  ? 
    res.json({ 
      message: "Not found",
      data,
      status: 'rejected',
      code: 404,})
  :
    res.json({ 
      // message: 'template message',
      data,
      status: 'success',
      code: 200,
 })
})

router.delete('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const data = await removeContact(contactId)
  data === null 
  ? 
  res.json({ 
    message: "Not found",
    status: 'rejected',
    code: 404,})
  :
  res.json({ 
    message: 'contact deleted',
    data,
    status: 'success',
    code: 200,
  
  })
})

router.post('/', async (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if(error)
  { 
  res.json({ 
    message: "missing required name field",
    status: 'rejected',
    code: 400,})
  }
  const newContact = await addContact(req.body);
  res.json({ 
    message: 'contact added',
    data: {...newContact, id: nanoid()},
    status: 'success',
    code: 201,
  }) 
})

router.put('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const { error } = contactSchema.validate(req.body);
  if(error)
  { 
  res.json({ 
    message: "missing fields",
    status: 'rejected',
    code: 400,})
  }
  const data = await updateContact(contactId, req.body)
  data === null 
  ? 
  res.json({ 
    message: "Not found",
    status: 'rejected',
    code: 404,})
  :
  res.json({ 
    message: 'template message',
    data: {...data, id: contactId},
    status: 'success',
    code: 200,
  })
})

module.exports = router
