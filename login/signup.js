$(document).ready(function () {
    $("#business").click(function () {
        location.href = "/business_login";
    });
    $("#consumer").click(function () {
        location.href = "/consumer_login";
    });
});


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

const inputImage = document.querySelector("#input_image");

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