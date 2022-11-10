const express = require("express");
const client = require('./database');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 생활용품");
    client.query("select * from product where start <= now() and category='daily_supplies'",(err,rows) =>{
        res.render('Category_daily', {
          rows : rows,
          session : req.session.is_logined,
        });
    });
})

module.exports = router;