// 드롭다운 메뉴 부분
const button = () => {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
  });
};

button();


// 파일 첨부 부분
function readImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const previewImage = document.querySelector("#preview-image");
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

const inputImage = document.querySelector("#input-image");

inputImage.addEventListener("change", (e) => {
  readImage(e.target);
});
function onClickUpload() {
  inputImage.click();
}


// 콤마 부분
function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}
