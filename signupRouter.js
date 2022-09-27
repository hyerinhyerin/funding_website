const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("회원가입페이지");
    res.sendFile(__dirname + "/login/signup.html");
})

module.exports = router;