const express = require('express');
const contactsController = require('../../controllers/contactsController')

const contactsRouter = express.Router()

contactsRouter.get('/', contactsController.getContacts)

contactsRouter.get('/:contactId', contactsController.getContactById)

contactsRouter.delete('/:contactId', contactsController.deleteContactById)

contactsRouter.post('/', contactsController.addNewContact)

contactsRouter.put('/:contactId', contactsController.editContactById)

contactsRouter.patch('/:contactId/favorite', contactsController.updateStatusContact)

module.exports = contactsRouter
