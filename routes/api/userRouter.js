const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getCurrentUser, logoutUser, updateAvatar } = require('../../controllers')
const { validateBody, authCheck, upload } = require("../../middlewares");
const { registerUserSchema, loginUserSchema } = require("../../schemas");

router.post("/register", validateBody(registerUserSchema), registerUser);

router.post("/login", validateBody(loginUserSchema), loginUser);

router.get("/current", authCheck, getCurrentUser);

router.delete("/logout", authCheck, logoutUser);

router.patch("/avatar", authCheck, upload.single("avatar"), updateAvatar);

module.exports = router;