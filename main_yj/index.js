$(document).ready(function(){
    $(".main_login").click(function(){
        $.ajax({
            type : 'get',
            url:"../login/login.html",
            dataType:"html",
            success: function(data){
                $(".contain_mid").html(data);
            }
        });
    });    
});