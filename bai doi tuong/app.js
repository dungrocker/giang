
var array=["ngoc","giang"];
var quote = {
    "ngoc": "Bla Bla",
    "giang":"dashfkahfka"
}
btn.onclick=function random() {
    var rd =Math.floor(Math.random() * 2);
    var arr = document.getElementById("chu").innerHTML = array[rd]
    document.getElementById("lenh").innerHTML = quote[arr]
}
