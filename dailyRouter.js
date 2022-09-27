const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 생활용품");
    res.sendFile(__dirname + "/consumer/category/daily.html");
})

module.exports = router;