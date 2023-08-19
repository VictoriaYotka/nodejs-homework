const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIL, MAIL_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: "465",
  secure: true,
  auth: {
    user: MAIL,
    pass: MAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const mail = {
    from: MAIL,
    ...data,
  };
  await transport.sendMail(mail);
  return true;
};

module.exports = sendEmail;