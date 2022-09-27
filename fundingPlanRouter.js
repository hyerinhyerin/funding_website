const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("소비자 상품 예정 페이지");
    res.sendFile(__dirname + "/consumer/funding_planned.html");
})

module.exports = router;