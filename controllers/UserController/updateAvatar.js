const { ctrlWrapper } = require("../../helpers");
const { UserModel } = require("../../models");
const path = require("path");
const fsp = require("fs/promises");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tmpUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;
    const resultPath = path.join(avatarsDir, filename);
    await fsp.rename(tmpUpload, resultPath);
    const avatarURL = path.join("avatars", filename);
    Jimp.read(resultPath, (err, filename) => {
      if (err) throw err;
      filename.resize(250, 250).write(resultPath);
    });
    await UserModel.findByIdAndUpdate(_id, { resultPath });
    res.json({
      avatarURL,
    });
  };

  module.exports = ctrlWrapper(updateAvatar)