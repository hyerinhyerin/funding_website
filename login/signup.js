$(document).ready(function(){
    $("#business").click(function(){
        $.ajax({
            type : 'get',
            url:"business_login.html",
            dataType:"html",
            success: function(data){
                $(".contain_mid").html(data);
            }
        });
    });
    $("#consumer").click(function(){
        $.ajax({
            type : 'get',
            url:"consumer_login.html",
            dataType:"html",
            success: function(data){
                $(".contain_mid").html(data);
            }
        });
    });
    $("#submit_button1").click(function(){
        alert("사업자 회원가입이 성공되었습니다.")
        location.href = "../Main.html";
    })
    $("#submit_button2").click(function(){
        // var theForm = document.signupForm;

        // if(theForm.name.value == "" || theForm.id.value == "" || theForm.password.value == "" || theForm.address.value == "" || theForm.e-mail.value == "" || theForm.phone-number.value == "" || theForm.password_answer.value == ""){
        //     alert("모든 질문에 답을 해주세요");
        //     return false;
        // }else{
        //     alert("소비자 회원가입이 성공되었습니다.");
        //     location.href = "../Main.html";
        // }        

        alert("소비자 회원가입이 성공되었습니다.");
        location.href = "../Main.html";
    });
});

