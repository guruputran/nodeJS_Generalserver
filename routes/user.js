/** @format */

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//Authenticate user
//require('crypto').randomBytes(64).toString('hex')  ==== to generate secret keys

router.post("/api/login", (req, res) => {
  const username = req.body.username;
  const user = { username: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "3h",
  });
  res.json({ accessToken: accessToken });
});

module.exports = router;
