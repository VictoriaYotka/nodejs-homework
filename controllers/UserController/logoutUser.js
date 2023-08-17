const { ctrlWrapper } = require("../../helpers");
const { UserModel } = require("../../models");

const logoutUser = async (req, res) => {
    const { _id } = req.user;
    await UserModel.findByIdAndUpdate(_id, { token: "" });
    res.status(204).json({
      message: "No content",
    });
  };

  module.exports = ctrlWrapper(logoutUser)