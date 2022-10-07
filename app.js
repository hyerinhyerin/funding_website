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
const { dirname } = require("path");

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
app.set("views", path.join(__dirname, "/views"));

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

app.use(express.static(__dirname + "/"));

// 페이지 이동 라우터

// 카테고리
const main = require("./index");
const detail = require("./detailRouter");
const furniture = require("./furnitureRouter");
const electronic = require("./electronicRouter");
const daily = require("./dailyRouter");
const hobby = require("./hobbyRouter");
const beauty = require("./beautyRouter");

app.use("/", main);
app.use("/detail", detail);
app.use("/furniture", furniture);
app.use("/elec", electronic);
app.use("/daily", daily);
app.use("/hobby", hobby);
app.use("/beauty", beauty);

// 사업자
const productEdit = require("./productEditRouter");
const registration = require("./RegistrationAndmodificationRouter");

app.use("/productEdit", productEdit);
app.use("/RegistrationAndmodification", registration);

// 소비자
const all = require("./allRouter");
const fundingPlan = require("./fundingPlanRouter");
const early = require("./earlyRouter");
const search = require("./searchRouter");

app.use("/all", all);
app.use("/funding_plan", fundingPlan);
app.use("/early", early);
app.use("/search", search);

// 회원가입
const signup = require("./signupRouter");
const consumer = require("./consumerLoginRouter");
const business = require("./businessLoginRouter");

app.use("/signup", signup);
app.use("/consumer_login", consumer);
app.use("/business_login", business);

// 로그인 로그아웃
const login = require("./loginRouter");
const logout = require("./logoutRouter");

app.use("/login", login);
app.use("/logout", logout);

// error
// app.use(function (req, res, next) {
//   res.status(404).send("라우터 에러");
// });

// 사업자 회원가입
const businessSignup = require("./businessSignup")

app.post("/business_login", businessSignup.businessRouter);

// 소비자 회원가입
const consumerSignup = require("./consumerSignup")

app.post("/consumer_login", consumerSignup.consumerRouter);

// 로그인
const loginPostRouter = require("./loginPostRouter")

app.post("/login", loginPostRouter.loginRouter);

// 마이페이지 불러오기
const mypageRouter = require("./mypageRouter")

app.get("/mypage", mypageRouter);

// 마이페이지 수정
const updateRouter = require("./updateRouter")

app.post("/update", updateRouter.updateRouter);

app.get("early", (req, res) => {
  console.log("얼리버드");
  client.query(
    "select * from product where ealry = 'bird' and start <= now()",
    (err, rows) => {
      for (var i = 0; i < rows.length; ++i) {
        console.log(rows[i]);
        res.render("earlybird", {
          title: rows[i].title,
          content: rows[i].content,
          count: rows[i].count,
          image: rows[i].image,
        });
      }
    }
  );
});

// 상품등록

app.use(express.static("public"));

const multerRouter = require("./multerRouter");

app.post("/RegistrationAndmodification", multerRouter);




const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log(`${port} is running`);
});
