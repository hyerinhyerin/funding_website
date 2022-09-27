const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 가구");
    res.sendFile(__dirname + "/consumer/category/furniture.html");
})

module.exports = router;