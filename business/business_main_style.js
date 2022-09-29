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
      secondQ.style.color = "black";
      lastCts.style.display = "none";
      lastCts.classList.add("on");
      lastQ.style.color = "black";
    } else if (!firstCts.classList.contains("on")) {
      firstCts.style.display = "none";
      firstCts.classList.add("on");
      firstQ.style.color = "black";
  }
});

secondQ.addEventListener("click", () => {
  if (secondCts.classList.contains("on")) {
    secondCts.style.display = "block";
    secondQ.style.color = "#606060";
    secondCts.classList.remove("on");
    
    firstCts.style.display = "none";
    firstCts.classList.add("on");
    firstQ.style.color = "black";
    
    lastCts.style.display = "none";
    lastCts.classList.add("on");
    lastQ.style.color = "black";

    firstAA.style.display = "none";
    firstAA.classList.add("on");

    secondAA.style.display = "none";
    secondAA.classList.add("on");
  } else if (!secondCts.classList.contains("on")) {
    secondCts.style.display = "none";
    secondCts.classList.add("on");
    secondQ.style.color = "black";
  }
});

lastQ.addEventListener("click", () => {
  if (lastCts.classList.contains("on")) {
    lastCts.style.display = "block";
    lastQ.style.color = "#606060";
    lastCts.classList.remove("on");

    firstCts.style.display = "none";
    firstCts.classList.add("on");
    firstQ.style.color = "black";
    
    secondCts.style.display = "none";
    secondCts.classList.add("on");
    secondQ.style.color = "black";

    firstBB.style.display = "none";
    firstBB.classList.add("on");
    
    secondBB.style.display = "none";
    secondBB.classList.add("on");
    
    thirdBB.style.display = "none";
    thirdBB.classList.add("on");

  } else if (!lastCts.classList.contains("on")) {
    lastCts.style.display = "none";
    lastCts.classList.add("on");
    lastQ.style.color = "black";
  }
});

const firstOn = document.querySelector("#first-one");
const firstAA = document.querySelector(".first-first-one");

firstOn.addEventListener("click", () => {
  if (firstAA.classList.contains("on")) {
    firstAA.style.display = "block";
    firstAA.classList.remove("on");
  } else if (!firstAA.classList.contains("on")) {
    firstAA.style.display = "none";
    firstAA.classList.add("on");
  }
});

const secondOn = document.querySelector("#second-one");
const secondAA = document.querySelector(".second-second-one");

secondOn.addEventListener("click", () => {
  if (secondAA.classList.contains("on")) {
    secondAA.style.display = "block";
    secondAA.classList.remove("on");
  } else if (!secondAA.classList.contains("on")) {
    secondAA.style.display = "none";
    secondAA.classList.add("on");
  }
});

const firstOff = document.querySelector("#first-two");
const firstBB = document.querySelector(".first-first-two");

firstOff.addEventListener("click", () => {
  if (firstBB.classList.contains("on")) {
    firstBB.style.display = "block";
    firstBB.classList.remove("on");
  } else if (!firstBB.classList.contains("on")) {
    firstBB.style.display = "none";
    firstBB.classList.add("on");
  }
});

const secondOff = document.querySelector("#second-two");
const secondBB = document.querySelector(".second-second-two");

secondOff.addEventListener("click", () => {
  if (secondBB.classList.contains("on")) {
    secondBB.style.display = "block";
    secondBB.classList.remove("on");
  } else if (!secondBB.classList.contains("on")) {
    secondBB.style.display = "none";
    secondBB.classList.add("on");
  }
});

const thirdOff = document.querySelector("#third-two");
const thirdBB = document.querySelector(".third-third-two");

thirdOff.addEventListener("click", () => {
  if (thirdBB.classList.contains("on")) {
    thirdBB.style.display = "block";
    thirdBB.classList.remove("on");
  } else if (!thirdBB.classList.contains("on")) {
    thirdBB.style.display = "none";
    thirdBB.classList.add("on");
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


// 마이페이지 수정
const mypage_div = document.querySelector("#mypage_div");
const update_mypage = document.querySelector("#mypage_div_update");
const bt = document.querySelector("#bt");

bt.addEventListener("click", () => {
    mypage_div.style.display = "none";
    update_mypage.style.display = "block";
});

const bt2 = document.querySelector("#bt2");

bt2.addEventListener("click", () => {
    location.href = "/update";
})

const bt3 = document.querySelector('.funding-charge');

bt3.addEventListener("click",() => {
  location.href = "/RegistrationAndmodification";
})