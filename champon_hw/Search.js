// ajax 배너부터 페이지 변환
$(document).ready(function(){
    $.jqProgress=function(){
        $(".progress-done").each(function(){
            var thisprogress=$(this);
            var per=thisprogress.attr('data-done');
            thisprogress.css("width",per+"%");
            thisprogress.css("opacity","1");
        });
    }
    $("#mainline ul li").click(function(){
        $("#main_search").remove();
        $("#wrap").css("display","block"); 
        var _this=$(this);
        var thisurl=_this.data("url");
        $.ajax({
            type : 'get',
            url:thisurl,
            dataType:'html',
            success: function(data){
                $("#item-list").html(data);
                setTimeout(() => {
                    $.jqProgress();
                }, 500);
            }
        });
    });
    $.jqProgress();
});

$(".all_menu").click(function(){
    $("#main_search").remove();
    $("#wrap").css("display","block"); 
    $.ajax({
        type:'get',
        url:'/all',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
            setTimeout(()=>{
                $.jqProgress();
            },500);
        }
    });
});
$(".funding_menu").click(function(){
    $("#main_search").remove();
    $("#wrap").css("display","block"); 
    $.ajax({
        type:'get',
        url:'/funding_plan',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
        }
    });
});

$(".earlybird_menu").click(function(){
    $("#main_search").remove();
    $("#wrap").css("display","block"); 
    $.ajax({
        type:'get',
        url:'/early',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
        }
    });
});


