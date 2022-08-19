const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 세션을 파일에 저장
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

// express 설정 1
const app = express();

// db 연결 2
const client = mysql.createConnection({
    user : 'root',
    password : '1234',
    database : 'loginTest',
});

// ejs 설정 4 html은 데이터베이스의 정보 가져올 수 없기에 ejs 확장자 사용
app.set('view engine','ejs');
app.set('views', __dirname + '\\views');

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

// 마이페이지 불러오기
app.get('/mypage',(req,res)=>{
    console.log('회원가입 페이지');
    if(req.session.is_logined == true){
        res.render('business_mypage',{
            is_logined : req.session.is_logined,
            business_name : req.session.business_name,
            business_num : req.session.business_num,
            field : req.session.field,
            name : req.session.name,
            id : req.session.id,
            password : req.session.password,
            password_question : req.session.password_question,
            password_answer : req.session.password_answer,
            address : req.session.address,
            e_mail : req.session.e_mail,
            phone_number : req.session.phone_number,
            account_num : req.session.account_num,
        });
    }else{
        res.render('login',{
            is_logined : false
        });
    }
});

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
    const password_question = body.password_question;
    const password_answer = body.password_answer;

    client.query('select * from business where id=?',[id],(err,data)=>{
        if(data.length == 0){
            console.log('회원가입 성공');
            client.query('insert into business(business_name, business_num, field, name, id, password, address, e_mail, phone_number, account_num, password_question, password_answer) values(?,?,?,?,?,?,?,?,?,?,?,?)',[
                business_name, business_num, field, name, id, password, address, e_mail, phone_number, account_num, password_question, password_answer
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
    const password_question = body.password_question;
    const password_answer = body.password_answer;

    client.query('select * from consumer where id=?',[id],(err,data)=>{
        if(data.length == 0){
            console.log('회원가입 성공');
            client.query('insert into consumer(name, id, password, address, e_mail, phone_number, password_question, password_answer) values(?,?,?,?,?,?,?,?)',[
                name, id, password, address, e_mail, phone_number, password_question, password_answer
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
            // 세션에 추가
            req.session.is_logined = true;
            req.session.business_name = data.business_name;
            req.session.business_num = data.business_num;
            req.session.field = data.field;
            req.session.name = data.name;
            req.session.id = data.id;
            req.session.password = data.password;
            req.session.password_question = data.password_question;
            req.session.password_answer = data.password_answer;
            req.session.address = data.address;
            req.session.e_mail = data.e_mail;
            req.session.phone_number = data.phone_number;
            req.session.account_num = data.account_num;

            req.session.save(function(){ // 세션 스토어에 적용하는 작업
                res.render('business_mypage',{ // 정보전달
                    business_name : data[0].business_name,
                    business_num : data[0].business_num,
                    field : data[0].field,
                    name : data[0].name,
                    id : data[0].id,
                    password : data[0].password,
                    password_question : data[0].password_question,
                    password_answer : data[0].password_answer,
                    address : data[0].address,
                    e_mail : data[0].e_mail,
                    phone_number : data[0].phone_number,
                    account_num : data[0].account_num,
                    is_logined : true
                });
            });

            //res.sendFile(path.join(__dirname,'../Main_login.html'));
        }else{
            console.log('로그인 실패');
            res.redirect('/login');
        }
    });
    
});

//로그아웃
app.get('/logout',(req,res)=>{
    console.log('로그아웃 성공');
    req.session.destroy(function(err){
        // 세션 파괴후 할 것들
        res.redirect('/login');
    });

});



app.listen(3002,()=>{
    console.log('3002 port running...');
    console.log(path.join(__dirname, '..'));
});