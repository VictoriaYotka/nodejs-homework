const { HttpError, ctrlWrapper } = require("../helpers");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models");

const { SECRET_KEY } = process.env;

const authCheck = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    next(HttpError(401, "Not authorized 10"));
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized 14"));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await UserModel.findById(id);
    if (!user) {
      next(HttpError(401, "Not authorized 20"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, "Not authorized 25"));
  }
};

module.exports = ctrlWrapper(authCheck);