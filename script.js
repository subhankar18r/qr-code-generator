// url =

const input = document.querySelector("input");
const qrImg = document.querySelector("img");
const imgBox = document.querySelector(".imgBox");

function generateQr() {
  if (input.value.trim() == "") {
    qrImg.src = "";
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
    return;
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  imgBox.classList.add("show-img");
}
