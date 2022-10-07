const mysql = require('mysql');
const express = require("express");
const router = express.Router();

const client = mysql.createConnection({
    host: "funtestdb.c48enj5ykq9v.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "rlawodbs223",
    database: "funTestDb",
});

module.exports = client;