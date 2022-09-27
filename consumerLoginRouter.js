const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("소비자 회원가입");
  res.sendFile(__dirname + "/login/consumer_login.html");
});

module.exports = router;
