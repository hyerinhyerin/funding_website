const mysql = require("mysql");

const client = mysql.createConnection({
  host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "rlawodbs223",
  database: "funTestDb",
});

exports.consumerRouter = function(req, res) {
    console.log("회원가입 하는중");
    const body = req.body;
    const division = "2";
    const name = body.name;
    const id = body.id;
    const password = body.password;
    const address = body.address;
    const e_mail = body.e_mail;
    const phone_number = body.phone_number;
    const password_question = body.password_question;
    const password_answer = body.password_answer;
  
    client.query("select * from client where id=?", [id], (err, rows) => {
      if (rows.length == 0) {
        console.log("회원가입 성공");
        client.query(
          "insert into client(division, name, id, password, address, e_mail, phone_number, password_question, password_answer) values(?,?,?,?,?,?,?,?,?)",
          [
            division,
            name,
            id,
            password,
            address,
            e_mail,
            phone_number,
            password_question,
            password_answer,
          ]
        );
        res.redirect("/signup");
      } else {
        console.log(err);
        res.send(
          '<script>alert("회원가입 실패"); location.href="/signup";</script>'
        );
      }
    });
  }

