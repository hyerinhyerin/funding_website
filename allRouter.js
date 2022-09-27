const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("소비자 상품 전체 페이지");
    res.sendFile(__dirname + "/consumer/All_menu.html");
})

module.exports = router;