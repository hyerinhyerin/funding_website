const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("소비자 상세 페이지");
    res.sendFile(__dirname + "/consumer/detail_page.html");
})

module.exports = router;