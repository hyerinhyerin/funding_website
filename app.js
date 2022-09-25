const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session); // 세션을 파일에 저장
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const multer = require("multer");
const { runInNewContext } = require("vm");

// express 설정 1
const app = express();

// db 연결 2
const client = mysql.createConnection({
  // host : "us-cdbr-east-06.cleardb.net",
  // user : "ba7149f08d47c2",
  // password : "751b7369",
  // database : "heroku_99d017c83498894",
  host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "rlawodbs223",
  database: "funTestDb",
});

// ejs 설정 4 html은 데이터베이스의 정보 가져올 수 없기에 ejs 확장자 사용
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/login/views"));

// 정제 (미들웨어) 5 파일을 가져오면 깨질 수 있는데 그걸 방지
app.use(bodyParser.urlencoded({ extended: false }));

// 세션 (미들웨어) 6
app.use(
  session({
    secret: "blackzat", // 데이터를 암호화 하기 위해 필요한 옵션
    resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
    saveUninitialized: true, // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
    store: new FileStore(), // 세션이 데이터를 저장하는 곳
  })
);

app.use(express.static(path.join(__dirname)));

// 사업자 회원가입
app.get("/signup", (req, res) => {
  console.log("회원가입 페이지");
  res.sendFile(path.join(__dirname + "/champon_hw/login/signup.html"));
});

app.get("/business_login", (req, res) => {
  console.log("사업자 회원가입");
  res.sendFile(__dirname + "/champon_hw/login/business_login.html");
});

app.post("/business_login", (req, res) => {
  console.log("회원가입 하는중");
  const body = req.body;
  const division = "1";
  const business_name = body.business_name;
  const business_num = body.business_num;
  const field = body.field;
  const name = body.name;
  const id = body.id;
  const password = body.password;
  const address = body.address;
  const e_mail = body.e_mail;
  const phone_number = body.phone_number;
  const account_num = body.account_num;
  const password_question = body.password_question;
  const password_answer = body.password_answer;

  client.query("select * from client where id=?", [id], (err, data) => {
    if (data.length == 0) {
      console.log("회원가입 성공");
      client.query(
        "insert into client(division,business_name, business_num, field, name, id, password, address, e_mail, phone_number, account_num, password_question, password_answer) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          division,
          business_name,
          business_num,
          field,
          name,
          id,
          password,
          address,
          e_mail,
          phone_number,
          account_num,
          password_question,
          password_answer,
        ]
      );
      res.redirect("/signup");
    } else {
      console.log("회원가입 실패");
      res.send('<script>alert("회원가입 실패");</script>');
      console.log(err);
      res.redirect("/signup");
    }
  });
});

// 소비자 회원가입
app.get("/consumer_login", (req, res) => {
  console.log("소비자 회원가입");
  res.sendFile(__dirname + "/champon_hw/login/consumer_login.html");
});

app.post("/consumer_login", (req, res) => {
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

  client.query("select * from client where id=?", [id], (err, data) => {
    if (data.length == 0) {
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
      console.log("회원가입 실패");
      res.send('<script>alert("회원가입 실패");</script>');
      console.log(err);
      res.redirect("/signup");
    }
  });
});

// 로그인
app.get("/login", (req, res) => {
  console.log("로그인");
  res.sendFile(__dirname + "/champon_hw/login/login.html");
});

app.post("/login", (req, res) => {
  const body = req.body;
  const id = body.id;
  const password = body.password;

  client.query("select * from client where id=?", [id], (err, data) => {
    if (id == data[0].id && password == data[0].password) {
      console.log("로그인 성공");
      // 세션에 추가
      req.session.is_logined = true;
      req.session.client_id = data[0].id;

      console.log(req.session.is_logined);
      console.log(req.session.client_id);

      res.redirect("/mypage");
    } else {
      console.log("로그인 실패");
      res.redirect("/login");
    }
  });
});

// 마이페이지 불러오기
app.get("/mypage", (req, res) => {
  console.log("마이페이지");
  if (req.session.is_logined == true) {
    client.query("select * from client where id = ?", [req.session.client_id], (err, data) => {
      if (data[0].division == "1") {
        res.render("bussiness_main", {
          division: data[0].division,
          business_name: data[0].business_name,
          business_num: data[0].business_num,
          field: data[0].field,
          name: data[0].name,
          id: data[0].id,
          password: data[0].password,
          password_question: data[0].password_question,
          password_answer: data[0].password_answer,
          address: data[0].address,
          e_mail: data[0].e_mail,
          phone_number: data[0].phone_number,
          account_num: data[0].account_num,
        });
      } else if (data[0].division == "2") {
        res.render("bussiness_main", {
          division: data[0].division,
          name: data[0].name,
          id: data[0].id,
          password: data[0].password,
          password_question: data[0].password_question,
          password_answer: data[0].password_answer,
          address: data[0].address,
          e_mail: data[0].e_mail,
          phone_number: data[0].phone_number,
        });
      }
    });
  } else {
    res.redirect("/login");
  }
});


// 마이페이지 수정
app.post("/update", (req, res) => {
  const body = req.body;
  const business_name = body.business_name;
  const password = body.password;
  const password_answer = body.password_answer;
  const address = body.address;
  const e_mail = body.e_mail;
  const phone_number = body.phone_number;
  const account_num = body.account_num;
  const id = req.session.client_id;

  client.query("update client set business_name = ?, password = ?, password_answer = ?, address = ?, e_mail = ?, phone_number = ?, account_num = ?  where id = '" + id + "'", [
    business_name,
    password,
    password_answer,
    address,
    e_mail,
    phone_number,
    account_num,
  ], (error, result) => {
    if (error) {
      throw error;
    } else {
      res.redirect("/mypage");
    }
  });
});

//로그아웃
app.get("/logout", (req, res) => {
  console.log("로그아웃 성공");
  req.session.destroy(function (err) {
    // 세션 파괴후 할 것들
    res.redirect("/login");
  });
});

  // 페이지 이동
  // 로고
  const main = require("./main")
  app.use('/', main)
  
  // app.get("/", (req, res) => {
  //   console.log("메인페이지");
  //   res.sendFile(__dirname + "/champon_hw/Main.html");
  // });

  // 카테고리
  app.get("/furniture", (req, res) => {
    console.log("카테고리 가구");
    res.sendFile(__dirname + "/champon_hw/category/furniture.html");
  });
  app.get("/elec", (req, res) => {
    console.log("카테고리 전자기구");
    res.sendFile(__dirname + "/champon_hw/category/electronic.html");
  });
  app.get("/daily", (req, res) => {
    console.log("카테고리 생활용품");
    res.sendFile(__dirname + "/champon_hw/category/daily.html");
  });
  app.get("/hobby", (req, res) => {
    console.log("카테고리 취미");
    res.sendFile(__dirname + "/champon_hw/category/hobby.html");
  });
  app.get("/beauty", (req, res) => {
    console.log("카테고리 뷰티");
    res.sendFile(__dirname + "/champon_hw/category/beauty.html");
  });

  // 사업자
  app.get("/detail", (req, res) => {
    console.log("사업자 상세페이지");
    console.log("소비자 상세페이지");
    res.sendFile(__dirname + "/champon_hw/detail_page.html");
  });
  app.get("/productEdit",(req, res) => {
    console.log("사업자 상품 수정 페이지")
    res.sendFile(__dirname + "/champon_hw/businessOperatorPage/productEdit.html")
  })

  // 소비자
  app.get("/all", (req, res) => {
    console.log("ajax 전체");
    res.sendFile(__dirname + "/champon_hw/All_menu.html");
  });

  app.get('/funding_plan', (req, res) => {
    console.log('펀딩예정');
    res.sendFile(__dirname + '/champon_hw/funding_planned.html');
  });

  app.get("/early", (req, res) => {
    console.log("얼리버드");
    res.sendFile(__dirname + "/champon_hw/earlybird.html");
  });

  app.get('/search', (req, res) => {
    console.log('검색 form action 변수');
    res.sendFile(__dirname + '/champon_hw/Search.html');
  });

  // 상품등록수정

  app.use(express.static("champon_hw/public"));

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "champon_hw/public/images/");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
    },
  });

  var upload = multer({ storage: storage }, { filesize: 313 * 200 });

  app.get("/RegistrationAndmodification", (req, res) => {
    console.log("상품등록수정 페이지 로드");
    res.sendFile(
      path.join(
        __dirname +
          "/champon_hw/businessOperatorPage/RegistrationAndmodification.html"
      )
    );
  });

  app.post(
    "/RegistrationAndmodification",
    upload.fields([{ name: "input_image" }, { name: "detail_image" }]),
    (req, res) => {
      console.log("상품등록중");
      const body = req.body;
      const image = `/images/${req.files['input_image'][0].filename}`;
      const title = body.title;
      const content = body.detale_content;
      const start = body.period_date;
      const end = body.to;
      const money = body.goal_money;
      const name = body.product_name;
      const count = body.product_count;
      const price = body.product_price;
      const category = body.product_category;
      const ealry = body.ealry;
      const sale = body.general;
      const detailImage = `/images/${req.files['detail_image'][0].filename}`;

      const sql =
        "INSERT INTO product(image, title, content, start, end, money, name, count, price, category, ealry, sale, detailImage) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
      const data = [
        image,
        title,
        content,
        start,
        end,
        money,
        name,
        count,
        price,
        category,
        ealry,
        sale,
        detailImage,
      ];

      client.query(sql, data, (err, row) => {
        if (err) {
          console.error("err : " + err);
        } else {
          console.log("row : " + JSON.stringify(row));
        }
      });

      const sql2 = "SELECT * FROM product WHERE name = ? ";

      client.query(sql2, [name], (err, row) => {
        if (name == row[0].name) {
          res.render("product", {
            image: row[0].image,
            title: row[0].title,
            content: row[0].content,
            start: row[0].start,
            end: row[0].end,
            money: row[0].money,
            name: row[0].name,
            count: row[0].count,
            price: row[0].price,
            category: row[0].category,
            ealry: row[0].ealry,
            sale: row[0].sale,
            detailImage: row[0].detailImage,
            number : row[0].number,
          }); 
        } else if (err) {
          console.error(err)
        } else {
          res.redirect("/RegistrationAndmodification");
        }
      });
    }
  );

  // app.get("/Main", (req, res) => {
  //   console.log("상품등록수정 완료");
  //   res.sendFile(
  //     path.join(
  //       __dirname +
  //       "/champon_hw/Main.html"
  //     )
  //   );
  // });


const port = process.env.PORT || 3002;

app.listen(port, function(){
  console.log(`${port} is running`);
});