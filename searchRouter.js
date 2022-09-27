const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("검색 form action 변수");
    res.sendFile(__dirname + "/consumer/Search.html");
})

module.exports = router;