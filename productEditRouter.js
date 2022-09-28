const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("사업자 상품 수정 페이지");
    res.sendFile(__dirname + "/business/productEdit.html");
})

module.exports = router;