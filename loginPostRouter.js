const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const FileStore = require("session-file-store")(session); // 세션을 파일에 저장

// express 설정 1
const app = express();

// 세션 (미들웨어) 6
app.use(
    session({
      secret: "loginData", // 데이터를 암호화 하기 위해 필요한 옵션
      resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
      saveUninitialized: true, // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
      //store: new FileStore(), // 세션이 데이터를 저장하는 곳
    })
  );

const client = mysql.createConnection({
  host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "rlawodbs223",
  database: "funTestDb",
});

exports.loginRouter = function (req, res) {
  const body = req.body;
  const id = body.id;
  const password = body.password;
  console.log(id)

  client.query("select * from client where id=?", [id], (err, rows) => {
    if (id == rows[0].id && password == rows[0].password) {
      console.log("로그인 성공");
      // 세션에 추가
      req.session.is_logined = true;
      req.session.client_id = rows[0].id;

      //localStorage.setItem('session_logined', true);

      console.log(req.session.is_logined);
      console.log(req.session.client_id);
      console.log(req.session);

      req.session.save(function(){
        res.redirect("/mypage");
      });
    } else {
      console.log(err);
      res.send(
        '<script>alert("회원가입 실패"); location.href="/signup";</script>'
      );
    }
  });
};
