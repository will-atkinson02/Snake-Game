var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var counter = 0;
function isEven(num) {
    return num % 2 === 0;
}
setInterval(function () {
    counter++;
    ctx.fillStyle = isEven(counter) ? "green" : "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}, 1000);
