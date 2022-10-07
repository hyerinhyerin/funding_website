const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("사업자 회원가입");
  res.sendFile(__dirname + "/login/business_login.html");
});

module.exports = router;
