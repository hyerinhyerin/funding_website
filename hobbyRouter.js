const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 취미");
    res.sendFile(__dirname + "/consumer/category/hobby.html");
})

module.exports = router;