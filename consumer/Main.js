
// const searchbtn=document.querySelector("#search_submit");

// function searchDisplay(){
//     location.href="/search";
// }
// searchbtn.addEventListener("click",searchDisplay);



$(document).ready(function(){
    $.jqProgress=function(){
        $(".progress-done").each(function(){
            var thisprogress=$(this);
            var per=thisprogress.attr('data-done');
            thisprogress.css("width",per+"%");
            thisprogress.css("opacity","1");
        });
    }
    $.jqProgress();
});

$(".item").click(function(){
    location.href = "/detail";
});
