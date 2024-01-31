let qrCode = document.getElementById('qr-code');
let qrImage = document.getElementById('qr-image');
let qrText = document.getElementById('qr-text');

function gerarQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrCode.classList.add('show-img');

    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove(console.error);
        }, 1000);
    }
}