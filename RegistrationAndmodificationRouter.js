const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("검색 form action 변수");
  res.sendFile(__dirname + "/business/RegistrationAndmodification.html");
});

module.exports = router;
