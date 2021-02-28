/*
* CANVAS HEARTBEAT MONITOR
*/
var monitor = document.getElementById("heartbeat");
var ctx = monitor.getContext("2d");
var screenWidth = monitor.width;
var screenHeight = monitor.height;
var screenTop = 5;
var screenLeft = 5;

function screenBackgroundRender(a) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(20, 20, 20, ' + a + ' )';
    ctx.fillRect(screenLeft, screenTop, screenWidth, screenHeight);
    ctx.closePath();
    ctx.beginPath();

    for (var j = 10 + screenTop; j < screenTop + screenHeight; j = j + 10) {
        ctx.moveTo(screenLeft, j);
        ctx.lineTo(screenLeft + screenWidth, j);
    }

    for (var i = 10 + screenLeft; i < screenLeft + screenWidth; i = i + 10) {
        ctx.moveTo(i, screenTop);
        ctx.lineTo(i, screenTop + screenHeight);
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba( 20, 50, 20, ' + a + ' )';
    ctx.stroke ();
    ctx.closePath ();
}

ctx.shadowBlur = 0;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
screenBackgroundRender(1);

PosX = screenLeft;
PosY = screenTop + screenHeight / 2;

setInterval(function () {
    ctx.restore();
    screenBackgroundRender(0.1);
    ctx.beginPath();
    ctx.moveTo(PosX, PosY);
    PosX = PosX + 1;
    // up
    if (PosX >= screenLeft + screenWidth * 20 / 100 && PosX < screenLeft + screenWidth * 25 / 100) {
        PosY = PosY - screenHeight * 1 / 300;
    }
    // down
    if (PosX >= screenLeft + screenWidth * 25 / 100 && PosX < screenLeft + screenWidth * 30 / 100) {
        PosY = PosY + screenHeight * 1 / 300;
    }
    // down
    if (PosX >= screenLeft + screenWidth * 35 / 100 && PosX < screenLeft + screenWidth * 37.5 / 100) {
        PosY = PosY + screenHeight * 1 / 75;
    }
    // up
    if (PosX >= screenLeft + screenWidth * 37.5 / 100 && PosX < screenLeft + screenWidth * 40 / 100) {
        PosY = PosY - screenHeight * 1 / 75;
    }
    // up
    if (PosX >= screenLeft + screenWidth * 45 / 100 && PosX < screenLeft + screenWidth * 50 / 100) {
        PosY = PosY - screenHeight * 1.5 / 100;
    }
    // down
    if (PosX >= screenLeft + screenWidth * 50 / 100 && PosX < screenLeft + screenWidth * 55 / 100) {
        PosY = PosY + screenHeight * 3 / 100;
    }
    // up
    if (PosX >= screenLeft + screenWidth * 55 / 100 && PosX < screenLeft + screenWidth * 60 / 100) {
        PosY = PosY - screenHeight * 1.5 / 100;
    }
    // up
    if (PosX >= screenLeft + screenWidth * 65 / 100 && PosX < screenLeft + screenWidth * 67.5 / 100) {
        PosY = PosY - screenHeight * 1 / 75;
    }
    // down
    if (PosX >= screenLeft + screenWidth * 67.5 / 100 && PosX < screenLeft + screenWidth * 70 / 100) {
        PosY = PosY + screenHeight * 1 / 75;
    }
    // back to x axis
    if (PosX >= screenLeft + screenWidth * 70 / 100 && PosX <= screenLeft + screenWidth) {
        PosY = screenTop + screenHeight / 2;
    }
    if (PosX > screenLeft + screenWidth) {
        PosX = screenLeft;
        ctx.moveTo(PosX, PosY);
    }
    ctx.lineTo(PosX, PosY);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#33ff33';
    ctx.stroke();
    ctx.closePath();
}, 6);
