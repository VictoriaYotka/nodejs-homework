const express = require("express");
const router = express.Router();
const UserController = require('../../controllers')
const {
  validateBody,
  authCheck,
} = require("../../middlewares");
const { registerUserSchema, loginUserSchema } = require("../../schemas");

router.post("/register", validateBody(registerUserSchema), UserController.registerUser);

router.post("/login", validateBody(loginUserSchema), UserController.loginUser);

router.get("/current", authCheck, UserController.getCurrentUser);

router.delete("/logout", authCheck, UserController.logoutUser);

module.exports = router;