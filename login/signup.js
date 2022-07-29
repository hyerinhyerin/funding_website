document.getElementById("business").addEventListener('click',singup_b);
document.getElementById("consumer").addEventListener('click',singup_c);

function singup_b(){
    location.href = "business_login.html";
}

function singup_c(){
    location.href = "consumer_login.html";
}