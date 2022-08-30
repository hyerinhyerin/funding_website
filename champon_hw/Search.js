const Text=document.getElementById("search");

new URLSearchParams(window.location.search).forEach((value,name)=>{
    Text.value=`${value}`;
})

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
        var _this=$(this);
        var thisurl=_this.data("url");
        $.ajax({
            type : 'get',
            url:'category/'+thisurl,
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
    $.ajax({
        type:'get',
        url:'All_menu.html',
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
    $.ajax({
        type:'get',
        url:'funding_plan.html',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
        }
    });
});

$(".earlybird_menu").click(function(){
    $("#main_search").remove();
    $.ajax({
        type:'get',
        url:'earlybird.html',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
        }
    });
});

