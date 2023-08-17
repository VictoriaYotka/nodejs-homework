const { ctrlWrapper, HttpError } = require("../../helpers");
const { UserModel } = require("../../models");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      throw HttpError(409, "Email in use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ ...req.body, password: hashPassword });
    res.status(201).json({
      email: newUser.email,
      subscription: newUser.subscription,
    });
  };

  module.exports = ctrlWrapper(registerUser)