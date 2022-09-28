const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("메인페이지");
    res.sendFile(__dirname + "/consumer/Main.html");
})

module.exports = router;