const express = require('express');
const {
    getContacts,
    getContactById,
    addNewContact,
    deleteContactById,
    editContactById,
    updateStatusContact
  } = require('../../controllers')
const { authCheck, isIdValid, validateBody } = require('../../middlewares')
const { contactSchema, contactFavoriteSchema } = require('../../schemas')

const contactsRouter = express.Router()

contactsRouter.use(authCheck)

contactsRouter.get('/', getContacts)

contactsRouter.get('/:contactId', isIdValid, getContactById)

contactsRouter.delete('/:contactId', isIdValid, deleteContactById)

contactsRouter.post('/', validateBody(contactSchema), addNewContact)

contactsRouter.put('/:contactId', isIdValid, validateBody(contactSchema), editContactById)

contactsRouter.patch('/:contactId/favorite', isIdValid, validateBody(contactFavoriteSchema), updateStatusContact)

module.exports = contactsRouter
