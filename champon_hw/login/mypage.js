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