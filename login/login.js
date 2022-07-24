document.getElementById("bt").addEventListener('click',login);

function login(){
    const id = "1234";
    const password = "1234";

    if(id == document.querySelector("#id").value){
        if(password == document.querySelector("#password").value){
            alert("로그인되었습니다.");
        }
    } else {
        alert("아이디/비밀번호가 맞지 않습니다.");
    }
}