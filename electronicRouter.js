const express = require("express");
const client = require('./database');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("카테고리 전자기기");
    client.query("select * from product where start <= now() and category='electronic_devices'",(err,rows) =>{
        res.render('Category_elec', {
          rows : rows,
          session : req.session.is_logined,
        });
    });
})

module.exports = router;