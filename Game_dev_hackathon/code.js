var canvas = document.getElementById("mycanvas");

var ctx = canvas.getContext("2d");
canvas.width = 1225;
canvas.height = 575;

const snakex = [];
const snakey = [];
const snakedir = [];
const wallsx = [];
const wallsy = [];

var gameendistrue = 0;

var currsize = 1;
// var direction = 1;
var time = 0;

snakex[0] = coordinatestuff(25)
snakey[0] = coordinatestuff(8)
    /*snakex[1] = coordinatestuff(20)
    snakey[1] = coordinatestuff(12)
    snakex[2] = coordinatestuff(20)
    snakey[2] = coordinatestuff(13)
    snakex[3] = coordinatestuff(20)
    snakey[3] = coordinatestuff(14)
    snakex[4] = coordinatestuff(20)
    snakey[4] = coordinatestuff(15) */
snakedir[0] = 1;
/*snakedir[1] = 1;
snakedir[2] = 1;
snakedir[3] = 1;
snakedir[4] = 1;*/

//Placement of walls




//gamescreen
function Setup() {

    ctx.fillStyle = "#2E8B57";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();

    //H 


    if (1000 <= time && time < 1500 && time % 10 == 0) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.rect(25 * 19, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 19, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 29, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();
    }
    if (time >= 1500) {
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(25 * 19, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 19, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 29, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();

    }

    if (time == 1500) {
        for (let p = 0; p <= 10; p++) {
            wallsx[p] = 25 * 19 + p * 25;
            wallsy[p] = 25 * 11;
        }

        for (let p = 11; p <= 21; p++) {
            wallsx[p] = 25 * 29;
            wallsy[p] = 25 * 6 + (p - 11) * 25;
        }
        for (let p = 22; p <= 32; p++) {
            wallsx[p] = 25 * 19;
            wallsy[p] = 25 * 6 + (p - 22) * 25;
        }
    }
    if (4500 <= time && time < 5000 && time % 10 == 0) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        //ctx.rect(25 * 19, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 9, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 40, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();
    }
    if (time >= 5000) { //left rectangle and right
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        //ctx.rect(25 * 19, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 9, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 40, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();
    }
    if (time == 5000) {
        for (let p = 33; p <= 43; p++) {
            wallsx[p] = 25 * 9;
            wallsy[p] = 25 * 6 + (p - 33) * 25;
        }
        for (let p = 44; p <= 54; p++) {
            wallsx[p] = 25 * 40;
            wallsy[p] = 25 * 6 + (p - 44) * 25;
        }
    }
    wall_image = new Image();
    wall_image.src = 'wall.png';
    wall_image.onload = function() {
        for (let i = 0; i <= 40; i++) {
            ctx.drawImage(wall_image, 30 * i, 0, 35, 25)
            ctx.drawImage(wall_image, 30 * i, 550, 35, 25)
        }
        for (let i = 0; i <= 18; i++) {
            ctx.drawImage(wall_image, 0, 30 * i, 25, 35)
            ctx.drawImage(wall_image, 1200, 30 * i, 25, 35)
        }

    }
}

function coordinatestuff(t) {
    return 25 * t;

}


function direction(d) {
    var u = currsize - 1;
    while (u > 0) {
        snakedir[u] = snakedir[u - 1]
        u = u - 1;
    }
    snakedir[0] = d;
}

function update() {
    Setup()
    if (time % 1000 == 0) {
        if (snakedir[0] == 1) {
            u = 0;
            v = 1;
        }
        if (snakedir[0] == 2) {
            u = -1;
            v = 0;
        }
        if (snakedir[0] == 3) {
            u = 0;
            v = -1;
        }
        if (snakedir[0] == 4) {
            u = 1;
            v = 0;
        }
        snakex[currsize] = snakex[currsize - 1] + u * 25;
        snakey[currsize] = snakey[currsize - 1] + v * 25;
        snakedir[currsize] = snakedir[0];
        currsize = currsize + 1;
    }
    for (let u = 0; u < currsize; u++) {
        ctx.fillStyle = '#DC143C'
        ctx.beginPath()
        ctx.rect(snakex[u], snakey[u], 25, 25)
        ctx.fill()
        ctx.closePath()
        if (time % 50 == 0) {
            if (snakedir[u] == 1) {
                snakey[u] = snakey[u] - 25;
            }
            if (snakedir[u] == 2) {
                snakex[u] = snakex[u] + 25;
            }
            if (snakedir[u] == 3) {
                snakey[u] = snakey[u] + 25;
            }
            if (snakedir[u] == 4) {
                snakex[u] = snakex[u] - 25;
            }

        }
    }
    if (time % 50 == 0) {
        direction(snakedir[0]);
    }
    time = time + 1;
}

onkeydown = function(e) {
    switch (e.which) {
        case 37: //left
            snakedir[0] = 4;
            break;
        case 38: //up
            snakedir[0] = 1;
            break;

        case 39: //right
            snakedir[0] = 2;
            break;

        case 40:
            //down
            snakedir[0] = 3;
            break;


    }

}

function collision_check() {
    var h = snakex[0];
    var k = snakey[0]
    if (h < 25 || h >= 1185) gameendistrue = 1;

    if (k < 25 || k >= 550) gameendistrue = 1;

    if (time >= 5000) t = 54;
    else if (time >= 1500) t = 32;
    else t = 0;
    for (let p = 0; p <= t; p++) {
        if (h == wallsx[p] && k == wallsy[p]) gameendistrue = 1;
    }
    for (let p = 1; p < currsize; p++) {
        if (h == snakex[p] && k == snakey[p]) gameendistrue = 1;
    }


    //if (h == 100 && k == 100)

    if (gameendistrue == 1) {
        alert("Game Over !");
        clearInterval(one);
        clearInterval(two);
    }
}








// Gaming area  - (35,25 --- 35,550) (35,25 ----- 1210, 25) 21 47 
// 



two = setInterval(update, 0.1)
one = setInterval(collision_check, 0.1)











/*
function update() {

    ctx.fillStyle = "#FF0000";
    ctx.beginPath();

    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#00FFFF";
    ctx.beginPath();

    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
onmousemove = function(e) {
    x = e.clientX;
    y = e.clientY;


}

setInterval(update, 1) */