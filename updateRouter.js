const mysql = require("mysql");

const client = mysql.createConnection({
  host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "rlawodbs223",
  database: "funTestDb",
});

exports.updateRouter = function (req, res) {
  const body = req.body;
  const business_name = body.business_name;
  const password = body.password;
  const password_answer = body.password_answer;
  const address = body.address;
  const e_mail = body.e_mail;
  const phone_number = body.phone_number;
  const account_num = body.account_num;
  const id = req.session.client_id;

  client.query(
    "update client set business_name = ?, password = ?, password_answer = ?, address = ?, e_mail = ?, phone_number = ?, account_num = ?  where id = '" +
      id +
      "'",
    [
      business_name,
      password,
      password_answer,
      address,
      e_mail,
      phone_number,
      account_num,
    ],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.redirect("/mypage");
      }
    }
  );
};
