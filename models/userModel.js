const { Schema, model } = require("mongoose");
const { emailRegExp } = require('../constants')

const userSchema = new Schema({
      email: {
        type: String,
        match: emailRegExp,
        required: [true, 'Email is required'],
        unique: true,
      },
      password: {
        type: String,
        minlength: 6,
        required: [true, 'Set password for user'],
      },
      subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
      },
      token: {
        type: String,
        default: "",
      },
      avatarURL: {
        type: String,
        required: true,
      },
}, {versionKey: false, timestamps: true});

const UserModel = model("user", userSchema);

module.exports = UserModel;