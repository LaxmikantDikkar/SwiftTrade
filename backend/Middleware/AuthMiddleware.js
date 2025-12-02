const express = require("express");
const router = express.Router();
const User = require("../Models/Signup");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/",(req, res) => {
  
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id);
      
      if (user) return res.json({ status: true, user: user.username, userId: user._id})
      else return res.json({ status: false })
    }
  })
});

module.exports = router;