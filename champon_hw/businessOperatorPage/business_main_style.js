const firstQ = document.querySelector("#object_first");
const firstCts = document.querySelector(".first-constents");

const secondQ = document.querySelector("#object_second");
const secondCts = document.querySelector(".second-constents");

const lastQ = document.querySelector("#object_last");
const lastCts = document.querySelector(".last-constents");

firstQ.addEventListener("click", () => {
    if (firstCts.classList.contains("on")) {
      firstCts.style.display = "block";
      firstQ.style.color = "#606060";
      firstCts.classList.remove("on");
      secondCts.style.display = "none";
      secondCts.classList.add("on");
      secondQ.style.color = "white";
      lastCts.style.display = "none";
      lastCts.classList.add("on");
      lastQ.style.color = "white";
    } else if (!firstCts.classList.contains("on")) {
      firstCts.style.display = "none";
      firstCts.classList.add("on");
      firstQ.style.color = "white";
  }
});

secondQ.addEventListener("click", () => {
  if (secondCts.classList.contains("on")) {
    secondCts.style.display = "block";
    secondQ.style.color = "#606060";
    secondCts.classList.remove("on");
    firstCts.style.display = "none";
    firstCts.classList.add("on");
    firstQ.style.color = "white";
    lastCts.style.display = "none";
    lastCts.classList.add("on");
    lastQ.style.color = "white";
  } else if (!secondCts.classList.contains("on")) {
    secondCts.style.display = "none";
    secondCts.classList.add("on");
    secondQ.style.color = "white";
  }
});

lastQ.addEventListener("click", () => {
  if (lastCts.classList.contains("on")) {
    lastCts.style.display = "block";
    lastQ.style.color = "#606060";
    lastCts.classList.remove("on");
    firstCts.style.display = "none";
    firstCts.classList.add("on");
    firstQ.style.color = "white";
    secondCts.style.display = "none";
    secondCts.classList.add("on");
    secondQ.style.color = "white";
  } else if (!lastCts.classList.contains("on")) {
    lastCts.style.display = "none";
    lastCts.classList.add("on");
    lastQ.style.color = "white";
  }
});

//현재 판매 현황
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