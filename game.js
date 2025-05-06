var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var DIRECTIONS = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0],
};
var Snake = /** @class */ (function () {
    function Snake() {
        this.positions = [[3, 3], [4, 3], [5, 3]];
        this.direction = 'right';
    }
    Snake.prototype.move = function () {
        var lastElement = this.positions.slice(-1)[0];
        this.positions.push([lastElement[0] + DIRECTIONS[this.direction][0], lastElement[1] + DIRECTIONS[this.direction][1]]);
        this.positions.shift();
    };
    return Snake;
}());
var snake = new Snake();
setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    snake.positions.forEach(function (position) {
        ctx.fillStyle = "green";
        ctx.fillRect(position[0] * 40, position[1] * 40, 40, 40);
    });
}, 500);
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            snake.direction = 'up';
            break;
        case 'ArrowDown':
            snake.direction = 'down';
            break;
        case 'ArrowLeft':
            snake.direction = 'left';
            break;
        case 'ArrowRight':
            snake.direction = 'right';
            break;
    }
});
