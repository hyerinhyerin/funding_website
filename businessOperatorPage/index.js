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

function detailReadImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const previewImage = document.querySelector("#detail-image");
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

const detailImage = document.querySelector("#detail-image-input");

detailImage.addEventListener("change", (e) => {
  detailReadImage(e.target);
});

// 콤마 부분
function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}
