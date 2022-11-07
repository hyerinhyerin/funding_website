const express = require("express");
const client = require('./database');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 뷰티");
    client.query("select * from product where start <= now() and category='beauty'",(err,rows) =>{
        res.render('Category_beauty', {
          rows : rows,
          session : req.session.is_logined,
        });
    });
});

module.exports = router;