const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 전자기기");
    res.sendFile(__dirname + "/consumer/category/electronic.html");
})

module.exports = router;