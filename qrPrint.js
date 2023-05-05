
//new QRCode(document.getElementById("qr1"), {text: "nhakhoasv.com/?okey=23051655", width: 200, height: 200});

var qrText = new URL(location.href).searchParams.get("qr");
var qrHead = new URL(location.href).searchParams.get("h");
var isHideInfo = new URL(location.href).searchParams.get("hide")*1;
var qrArr = decodeURIComponent(qrText).split(",");

for (let i = 0; i < qrArr.length; i++) {
    qrArr[i] = qrArr[i].split("$")
}

qrArr.sort((a, b)=>{
    if(a[3] > b[3]) return -1;
});

for (let i = 0; i < qrArr.length; i++) {
    let e = qrArr[i];
    document.body.innerHTML +=
    `<div class="item">
        <div class="head">NHA KHOA SV | ${qrHead}</div>
        <div class="tbody">
            <div class="left" id="qr${i}"></div>
            <div class="right">${e[0]}</div>
        </div>
        <div class="foot">Số lg: ${e[1]} (${e[2]}) - ${e[3]}</div>
    </div>`;
    //new QRCode(document.getElementById("qr"+i), {text: "nhakhoasv.com/?okey="+qrHead, width: 200, height: 200});
}

for (let i = 0; i < qrArr.length; i++) {
    new QRCode(document.getElementById("qr"+i), {text: "nhakhoasv.com/?okey="+qrHead, width: 200, height: 200});
}