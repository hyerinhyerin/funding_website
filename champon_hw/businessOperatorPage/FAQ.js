const firstQ = document.querySelector("#first-q");
const firstCts = document.querySelector(".first-constents");

firstQ.addEventListener("mouseover", () => {
  firstQ.style.color = "black";
});
firstQ.addEventListener("mouseout", () => {
  if (firstCts.classList.contains("on")) {
    firstQ.style.color = "gray";
  } else {
    firstQ.style.color = "black";
  }
});

firstQ.addEventListener("click", () => {
  if (firstCts.classList.contains("on")) {
    firstCts.style.display = "block";
    firstCts.classList.remove("on");
  } else if (!firstCts.classList.contains("on")) {
    firstCts.style.display = "none";
    firstCts.classList.add("on");
  }
});

const secondQ = document.querySelector("#second-q");
const secondCts = document.querySelector(".second-constents");

secondQ.addEventListener("mouseover", () => {
  secondQ.style.color = "black";
});
secondQ.addEventListener("mouseout", () => {
  if (secondCts.classList.contains("on")) {
    secondQ.style.color = "gray";
  } else {
    secondQ.style.color = "black";
  }
});

secondQ.addEventListener("click", () => {
  if (secondCts.classList.contains("on")) {
    secondCts.style.display = "block";
    secondCts.classList.remove("on");
  } else if (!secondCts.classList.contains("on")) {
    secondCts.style.display = "none";
    secondCts.classList.add("on");
  }
});

const thirdQ = document.querySelector("#third-q");
const thirdCts = document.querySelector(".third-constents");

thirdQ.addEventListener("mouseover", () => {
  thirdQ.style.color = "black";
});
thirdQ.addEventListener("mouseout", () => {
  if (thirdCts.classList.contains("on")) {
    thirdQ.style.color = "gray";
  } else {
    thirdQ.style.color = "black";
  }
});

thirdQ.addEventListener("click", () => {
  if (thirdCts.classList.contains("on")) {
    thirdCts.style.display = "block";
    thirdCts.classList.remove("on");
  } else if (!thirdCts.classList.contains("on")) {
    thirdCts.style.display = "none";
    thirdCts.classList.add("on");
  }
});

const fourthQ = document.querySelector("#fourth-q");
const fourthCts = document.querySelector(".fourth-constents");

fourthQ.addEventListener("mouseover", () => {
  fourthQ.style.color = "black";
});
fourthQ.addEventListener("mouseout", () => {
  if (fourthCts.classList.contains("on")) {
    fourthQ.style.color = "gray";
  } else {
    fourthQ.style.color = "black";
  }
});

fourthQ.addEventListener("click", () => {
  if (fourthCts.classList.contains("on")) {
    fourthCts.style.display = "block";

    fourthCts.classList.remove("on");
  } else if (!fourthCts.classList.contains("on")) {
    fourthCts.style.display = "none";
    fourthCts.classList.add("on");
  }
});

const lastQ = document.querySelector("#last-q");
const lastCts = document.querySelector(".last-constents");

lastQ.addEventListener("mouseover", () => {
  lastQ.style.color = "black";
});
lastQ.addEventListener("mouseout", () => {
  if (lastCts.classList.contains("on")) {
    lastQ.style.color = "gray";
  } else {
    lastQ.style.color = "black";
  }
});

lastQ.addEventListener("click", () => {
  if (lastCts.classList.contains("on")) {
    lastCts.style.display = "block";
    lastQ.style.color = "black";
    lastCts.classList.remove("on");
    lastCts.style.borderTop = "none";
    lastCts.style.borderBottomLeftRadius = "5px";
    lastCts.style.borderBottomRightRadius = "5px";
    lastQ.style.borderBottomLeftRadius = "0";
    lastQ.style.borderBottomRightRadius = "0";
  } else if (!lastCts.classList.contains("on")) {
    lastCts.style.display = "none";
    lastCts.classList.add("on");
    lastQ.style.borderBottomLeftRadius = "5px";
    lastQ.style.borderBottomRightRadius = "5px";
  }
});
