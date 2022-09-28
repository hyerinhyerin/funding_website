const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 뷰티");
    res.sendFile(__dirname + "/consumer/category/beauty.html");
})

module.exports = router;