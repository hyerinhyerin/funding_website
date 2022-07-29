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
});

