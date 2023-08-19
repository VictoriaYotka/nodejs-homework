const { ctrlWrapper, HttpError } = require("../../helpers");
const { UserModel } = require("../../models");

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await UserModel.findOne({
      verificationToken,
    });
    if (!user) {
      throw HttpError(404, "User not found");
    }
    await UserModel.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: "",
    });
    res.json({
      message: "Verification successful",
    });
  };

  module.exports = ctrlWrapper(verifyEmail)