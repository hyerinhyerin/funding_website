const express = require("express");
const client = require('./database');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('얼리버드');
    client.query("select * from product where ealry = 'bird' and start <= now()", (err, rows) => {
        res.render("earlybird", {
            rows: rows,
            session : req.session.is_logined,
        });
    });
});

module.exports = router;