// 변수 부분
const earlyFirst = document.querySelector(".early-first");
const nomalFirst = document.querySelector(".nomal-first");
const deleteFirst = document.querySelector("#delete1");
const deleteSecond = document.querySelector("#delete2");

const totalPrice = document.querySelector("#total-price");

let introCount1 = 1;
let introCount2 = 1;
let temp1 = 0;
let temp2 = 0;
const count1 = document.querySelector("#early-count");
const count2 = document.querySelector("#nomal-count");
const originPrice1 = document.querySelector("#origin-price1");
const originPrice2 = document.querySelector("#origin-price2");
const total = document.querySelector("#total");
const totalDiv = document.querySelector(".total-div");
const totalHr = document.querySelector("#total-hr");

// 옵션 선택하는 순간
function optionChange(target) {
  if (target == "early-1") {
    checkSize();
    inputNumberFormat(total);
    earlyFirst.style.display = "block";
    temp1 = eval(originPrice1.value) * eval(count1.value);
    if (nomalFirst.style.display == "none") {
      total.value = temp1;
    } else {
      total.value = temp1 + temp2;
    }
  }
  if (target == "normal-1") {
    checkSize();
    inputNumberFormat(total);
    nomalFirst.style.display = "block";
    temp2 = eval(originPrice2.value) * eval(count2.value);
    if (earlyFirst.style.display == "none") {
      total.value = temp2;
    } else {
      total.value = temp1 + temp2;
    }
  }
  if (target != "select") {
    checkSize();
    inputNumberFormat(total);
    totalDiv.style.display = "block";
    totalHr.style.display = "block";
  }
}

// x삭제 버튼
deleteFirst.addEventListener("click", function deleteProduct1(e) {
  e.preventDefault();
  earlyFirst.style.display = "none";
  checkSize();
  total.value = 0;
  if (nomalFirst.style.display == "none") {
    total.value = 0;
  } else {
    total.value = temp2;
  }
  temp1 = 0;
  count1.value = 1;
  introCount1 = 1;
  if (
    earlyFirst.style.display == "none" &&
    nomalFirst.style.display == "none"
  ) {
    totalDiv.style.display = "none";
    totalHr.style.display = "none";
  }
  inputNumberFormat(total);
});
deleteSecond.addEventListener("click", function deleteProduct2(e) {
  e.preventDefault();
  nomalFirst.style.display = "none";
  checkSize();
  inputNumberFormat(total);
  total.value = 0;
  if (earlyFirst.style.display == "none") {
    total.value = 0;
  } else {
    total.value = temp1;
  }
  temp2 = 0;
  count2.value = 1;
  introCount2 = 1;
  if (
    earlyFirst.style.display == "none" &&
    nomalFirst.style.display == "none"
  ) {
    totalDiv.style.display = "none";
    totalHr.style.display = "none";
  }
  inputNumberFormat(total);
});

// 실시간 합계

function plusCount1() {
  checkSize();
  inputNumberFormat(total);
  introCount1++;
  count1.value = introCount1;
}
function minusCount1() {
  checkSize();
  inputNumberFormat(total);
  if (introCount1 > 1) {
    introCount1--;
    count1.value = introCount1;
  }
}

function plusCount2() {
  checkSize();
  inputNumberFormat(total);
  introCount2++;
  count2.value = introCount2;
}
function minusCount2() {
  checkSize();
  inputNumberFormat(total);
  if (introCount2 > 1) {
    introCount2--;
    count2.value = introCount2;
  }
}

function clac1() {
  temp1 = eval(originPrice1.value) * eval(count1.value);
  total.value = temp1 + temp2;
  checkSize();
  inputNumberFormat(total);
}

function clac2() {
  temp2 = eval(originPrice2.value) * eval(count2.value);
  total.value = temp1 + temp2;
  checkSize();
  inputNumberFormat(total);
}

// 인풋창 사이즈 자동 조절
function checkSize() {
  if (total.value.length == "5") {
    total.setAttribute("size", "5");
  }
  let size = total.value.length;
  total.setAttribute("size", size);
}

// 인풋창 콤마
function inputNumberFormat(total) {
  total.value = comma(uncomma(total.value));
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}

function modifyingBtn() {
  window.location.href = "RegistrationAndmodification.html";
}
