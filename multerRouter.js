const express = require("express");
const multer = require("multer");
const mysql = require("mysql");
const path = require("path");
const router = express.Router();

const client = mysql.createConnection({
  host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "rlawodbs223",
  database: "funTestDb",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
  },
});

const upload = multer({ storage: storage }, { filesize: 313 * 200 });

router.post(
  "/RegistrationAndmodification",
  upload.fields([{ name: "input_image" }, { name: "detail_image" }]),
  (req, res) => {
    console.log("상품등록중");
    const body = req.body;
    const image = `/images/${req.files["input_image"][0].filename}`;
    const title = body.title;
    const content = body.detale_content;
    const start = body.period_date;
    const end = body.to;
    const money = body.goal_money;
    const name = body.product_name;
    const count = body.product_count;
    const price = body.product_price;
    const category = body.product_category;
    const ealry = body.ealry_general;
    const sale = body.ealry_general;
    const detailImage = `/images/${req.files["detail_image"][0].filename}`;
    const id = req.session.client_id;

    const sql =
      "INSERT INTO product(image, title, content, start, end, money, name, count, price, category, ealry, sale, detailImage,id) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
      id,
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
      console.log(name);
      if (name == row[0].name) {
        res.sendFile(__dirname + "/business/productCP.html");
      } else if (err) {
        console.error(err);
      } else {
        res.redirect("/RegistrationAndmodification");
      }
    });
  }
);

module.exports = router;
