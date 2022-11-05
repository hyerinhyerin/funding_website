const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("상품등록완료");
  res.sendFile(__dirname + "/consumer/funding.html");
});

module.exports = router;
