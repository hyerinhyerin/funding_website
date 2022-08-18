const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 세션을 파일에 저장
const cookieParser = require('cookie-parser');

// express 설정 1
const app = express();

// db 연결 2
const client = mysql.createConnection({
    user : 'root',
    password : '1234',
    database : 'loginTest',
});


// 정제 (미들웨어) 5 파일을 가져오면 깨질 수 있는데 그걸 방지
app.use(bodyParser.urlencoded({extended:false}));

// 세션 (미들웨어) 6
app.use(session({
    secret: 'blackzat', // 데이터를 암호화 하기 위해 필요한 옵션
    resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
    saveUninitialized: true, // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
    store : new FileStore() // 세션이 데이터를 저장하는 곳
}));

app.use(express.static(path.join(__dirname, '../')));

// 사업자 회원가입
app.get('/signup',(req,res)=>{
    console.log('회원가입 페이지');
    res.sendFile(__dirname + '/signup.html');
});

app.get('/business_login',(req,res) => {
    console.log('사업자 회원가입');
    res.sendFile(__dirname + '/business_login.html');
})

app.post('/business_login',(req,res)=>{
    console.log('회원가입 하는중')
    const body = req.body;
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
    const password_answer = body.password_answer;

    client.query('select * from business where id=?',[id],(err,data)=>{
        if(data.length == 0){
            console.log('회원가입 성공');
            client.query('insert into business(business_name, business_num, field, name, id, password, address, e_mail, phone_number, account_num, password_answer) values(?,?,?,?,?,?,?,?,?,?,?)',[
                business_name, business_num, field, name, id, password, address, e_mail, phone_number, account_num, password_answer
            ]);
            res.redirect('/signup');
        }else{
            console.log('회원가입 실패');
            res.send('<script>alert("회원가입 실패");</script>');
            console.log(err);
            res.redirect('/signup');
        }
    });
});

// 소비자 회원가입
app.get('/consumer_login',(req,res) => {
    console.log('소비자 회원가입');
    res.sendFile(__dirname + '/consumer_login.html');
})

app.post('/consumer_login',(req,res)=>{
    console.log('회원가입 하는중')
    const body = req.body;
    const name = body.name;
    const id = body.id;
    const password = body.password;
    const address = body.address;
    const e_mail = body.e_mail;
    const phone_number = body.phone_number;
    const password_answer = body.password_answer;

    client.query('select * from consumer where id=?',[id],(err,data)=>{
        if(data.length == 0){
            console.log('회원가입 성공');
            client.query('insert into consumer(name, id, password, address, e_mail, phone_number, password_answer) values(?,?,?,?,?,?,?)',[
                name, id, password, address, e_mail, phone_number, password_answer
            ]);
            res.redirect('/signup');
        }else{
            console.log('회원가입 실패');
            res.send('<script>alert("회원가입 실패");</script>');
            console.log(err);
            res.redirect('/signup');
        }
    });
});

// 로그인
app.get('/login',(req,res) => {
    console.log('로그인');
    res.sendFile(__dirname + '/login.html');
})

app.post('/login',(req,res)=>{
    const body = req.body;
    const id = body.id;
    const password = body.password;

    client.query('select * from business where id=?',[id],(err,data)=>{
        // 로그인 확인
        console.log(data[0]);
        console.log(id);
        console.log(data[0].id);
        console.log(data[0].password);
        console.log(id == data[0].id);
        console.log(password == data[0].password);
        if(id == data[0].id && password == data[0].password){
            console.log('로그인 성공');            
            req.session.is_logined = true;
            res.sendFile(path.join(__dirname,'../Main_login.html'));
        }else{
            console.log('로그인 실패');
            res.render('/login');
        }
    });
    
});

// 로그아웃
// app.get('/logout',(req,res)=>{
//     console.log('로그아웃 성공');
//     req.session.destroy(function(err){
//         // 세션 파괴후 할 것들
//         res.redirect('/signup');
//     });

// });

app.listen(3002,()=>{
    console.log('3002 port running...');
    console.log(path.join(__dirname, '..'));
});