const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("로그인");
  res.sendFile(__dirname + "/login/login.html");
});

module.exports = router;
