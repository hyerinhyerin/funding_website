const express = require("express");
const client = require('./database');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('펀딩예정');
    client.query("select * from product where start > now()", (err, rows) => {
        res.render("funding_planned", {
            rows: rows,
            session : req.session.is_logined,
        });
    });
});

module.exports = router;