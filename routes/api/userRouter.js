const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getCurrentUser, logoutUser } = require('../../controllers')
const { validateBody, authCheck } = require("../../middlewares");
const { registerUserSchema, loginUserSchema } = require("../../schemas");

router.post("/register", validateBody(registerUserSchema), registerUser);

router.post("/login", validateBody(loginUserSchema), loginUser);

router.get("/current", authCheck, getCurrentUser);

router.delete("/logout", authCheck, logoutUser);

module.exports = router;