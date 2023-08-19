const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getCurrentUser, logoutUser, updateAvatar, verifyEmail, resendVerification } = require('../../controllers')
const { validateBody, authCheck, upload } = require("../../middlewares");
const { registerUserSchema, loginUserSchema, emailSchema } = require("../../schemas");

router.post("/register", validateBody(registerUserSchema), registerUser);

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", validateBody(emailSchema), resendVerification);

router.post("/login", validateBody(loginUserSchema), loginUser);

router.get("/current", authCheck, getCurrentUser);

router.delete("/logout", authCheck, logoutUser);

router.patch("/avatar", authCheck, upload.single("avatar"), updateAvatar);

module.exports = router;