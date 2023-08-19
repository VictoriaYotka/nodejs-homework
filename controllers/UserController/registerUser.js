const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");
const { UserModel } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { BASE_URL } = process.env;

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const avatarURL = gravatar.url(email);
    const user = await UserModel.findOne({ email });
    if (user) {
      throw HttpError(409, "Email in use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = nanoid();
    const newUser = await UserModel.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
      verificationToken,
    });

    const verifyEmail = {
      to: email,
      subject: "Email verify",
      html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">"Click to verify your email"</a>`,
    };
    await sendEmail(verifyEmail);

    res.status(201).json({
      email: newUser.email,
      subscription: newUser.subscription,
    });
  };

  module.exports = ctrlWrapper(registerUser)