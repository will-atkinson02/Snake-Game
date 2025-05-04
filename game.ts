const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let counter: number = 0;

function isEven(num: number): boolean {
    return num % 2 === 0;
}

setInterval(() => {
    counter++;
    ctx.fillStyle = isEven(counter) ? "green" : "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}, 1000);