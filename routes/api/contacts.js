const express = require('express')
const { listContacts, getContactById } = require('../../models/contacts')

const router = express.Router()

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
    res.json({ message: "Not found",
    data,
    status: 'rejected',
    code: 404,})
  :
    res.json({ message: 'template message',
    data,
    status: 'success',
    code: 200,
 })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
