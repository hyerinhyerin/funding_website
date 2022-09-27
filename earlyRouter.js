const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("소비자 상품 얼리버드 페이지");
    res.sendFile(__dirname + "/consumer/earlybird.html");
})

module.exports = router;