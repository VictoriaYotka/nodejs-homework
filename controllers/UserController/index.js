const registerUser = require('./registerUser')
const loginUser  =require('./loginUser')
const getCurrentUser = require('./getCurrentUser')
const logoutUser = require('./logoutUser')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerification = require('./resendVerification')

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    updateAvatar,
    verifyEmail,
    resendVerification,
}