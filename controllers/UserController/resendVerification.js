const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");
const { UserModel } = require("../../models");
const { BASE_URL } = process.env;

const resendVerification = async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw HttpError(404, "User not found");
    }
    if (user.verify) {
      throw HttpError(400, "Verification has already been passed");
    }
    const verifyEmail = {
      to: email,
      subject: "Email verify",
      html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">"Click to verify your email"</a>`,
    };
  
    await sendEmail(verifyEmail);
  
    res.json({ message: "Verification email sent" });
  };

  module.exports = ctrlWrapper(resendVerification)