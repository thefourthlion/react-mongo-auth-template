const express = require("express");
const router = express.Router();

const {
  login,
  register,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotPassword").post(forgotPassword);

router.route("/passwordReset/:resetToken").put(resetPassword);

module.exports = router;
