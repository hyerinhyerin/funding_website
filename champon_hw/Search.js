const searchText=document.getElementById("search");
const searchBtn=document.getElementById("search_submit");
const searchValue=searchText.getAttribute('value');

new URLSearchParams(window.location.search).forEach((value,name)=>{
    searchText.value=`${value}`;
})


searchBtn.addEventListener("submit",function(){
    if(searchValue==document.querySelector("img").getAttribute("data-name")){
        console.log(searchValue);
        document.querySelector(".item").remove();
    }
});
// window.addEventListener("onbeforeunload",function(){
//     alert("??");
//     console.log("hi");
//     searchText.value="";
// });
// window.onbeforeunload=function(event){
//     alert("??");
//     console.log("hi");
//     searchText.value="";
// }

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
    $.ajax({
        type:'get',
        url:'/early',
        dataType:'html',
        success:function(data){
            $("#item-list").html(data);
        }
    });
});


