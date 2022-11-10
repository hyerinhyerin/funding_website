const express = require("express");
const client = require('./database');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("소비자 상품 전체 페이지");
    client.query("select * from product where start <= now()",(err,rows) =>{
        res.render('All_menu', {
          rows : rows,
          session : req.session.is_logined,
        });
    });
});

module.exports = router;