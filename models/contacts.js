const fs = require('fs/promises')
const path = require('path');

const contactsPath = path.resolve(__dirname, './contacts.json')

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, 'utf8');
  return JSON.parse(contacts);
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.filter(el => el.id === contactId)
  return contact[0] || null
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(el => el.id === contactId)
  if(contactIndex === -1) {
    return null
  }
  const [deletedContact] = contacts.splice(contactIndex, 1)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return deletedContact
}

const addContact = async (body) => {
  const contacts = await listContacts();
  contacts.push(body);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return body
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(el => el.id === contactId)
  if(contactIndex === -1) {
    return null
  }
  contacts.splice(contactIndex, 1, body)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return body
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
