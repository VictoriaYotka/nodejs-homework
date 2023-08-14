const getContacts = require('./getContacts');
const getContactById = require('./deleteContactById');
const addNewContact = require('./addNewContact');
const deleteContactById = require('./deleteContactById');
const editContactById = require('./editContactById');
const updateStatusContact = require('./updateStatusContact');

module.exports = {
  getContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  editContactById,
  updateStatusContact
}