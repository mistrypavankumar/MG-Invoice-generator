const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
} = require("../controllers/userControllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

// user routes
router.route("/me").get(isAuthenticatedUser, getUserDetails);

module.exports = router;
