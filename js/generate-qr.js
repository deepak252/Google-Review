function generateQR(txt){
    const qrcode = document.getElementById("qrcode");
    qrcode.innerHTML='<div></div>'
    const qr = new QRCode(
        qrcode,
        {
            width: 300,
            height: 300,
        }
    );
    
    qr.makeCode(txt);
}
