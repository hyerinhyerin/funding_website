const express = require("express");
const mysql = require("mysql");
const router = express.Router();

const client = mysql.createConnection({
  host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "rlawodbs223",
  database: "funTestDb",
});

router.get("/mypage", (req, res) => {
  console.log("마이페이지");
  if (req.session.is_logined == true) {
    console.log("진입성공");
    client.query(
      "select * from client where id = ?",
      [req.session.client_id],
      (err, rows) => {
        if (rows[0].division == "1") {
          res.render("bussiness_main", {
            division: rows[0].division,
            business_name: rows[0].business_name,
            business_num: rows[0].business_num,
            field: rows[0].field,
            name: rows[0].name,
            id: rows[0].id,
            password: rows[0].password,
            password_question: rows[0].password_question,
            password_answer: rows[0].password_answer,
            address: rows[0].address,
            e_mail: rows[0].e_mail,
            phone_number: rows[0].phone_number,
            account_num: rows[0].account_num,
          });
        } else if (rows[0].division == "2") {
          res.render("bussiness_main", {
            division: rows[0].division,
            name: rows[0].name,
            id: rows[0].id,
            password: rows[0].password,
            password_question: rows[0].password_question,
            password_answer: rows[0].password_answer,
            address: rows[0].address,
            e_mail: rows[0].e_mail,
            phone_number: rows[0].phone_number,
          });
        }
      }
    );
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
