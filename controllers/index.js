const {
    getContacts,
    getContactById,
    addNewContact,
    deleteContactById,
    editContactById,
    updateStatusContact
  } = require("./ContactsController")

const {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    updateAvatar
} = require('./UserController')

module.exports = {
        getContacts,
        getContactById,
        addNewContact,
        deleteContactById,
        editContactById,
        updateStatusContact,
        registerUser,
        loginUser,
        getCurrentUser,
        logoutUser,
        updateAvatar
}