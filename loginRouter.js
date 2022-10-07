const express = require("express");
const client = require("./database");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("로그인");
  res.sendFile(__dirname + "/login/login.html");
});

// router.post("/", (req, res) => {
//   const body = req.body;
//   const id = body.id;
//   const password = body.password;

//   console.log(id);

//   client.query("select * from client where id=?", [id], (err, rows) => {
//     if (id == rows[0].id && password == rows[0].password) {
//       console.log("로그인 성공");
//       // 세션에 추가
//       req.session.is_logined = true;
//       req.session.client_id = rows[0].id;

//       console.log(req.session.is_logined);
//       console.log(req.session.client_id);

//       res.redirect("/mypage");
//     } else {
//       console.log(err);
//       res.send(
//         '<script>alert("회원가입 실패"); location.href="/signup";</script>'
//       );
//     }
//   });
// });

module.exports = router;
