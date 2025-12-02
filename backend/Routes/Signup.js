const express = require("express");
const router = express.Router();

const User = require("../Models/Signup");

const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

router.post("/", async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    console.log(email, username);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;