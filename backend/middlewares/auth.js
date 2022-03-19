const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("./asyncErrorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resouce", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  next();
});
