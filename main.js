const router = require('express').Router();

router.get("/Main", (req, res) => {
    console.log("메인페이지");
    res.sendFile("/consumer/Main.html");
})

module.exports = router;