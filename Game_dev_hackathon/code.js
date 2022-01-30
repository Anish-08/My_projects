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
var currwallsize = 0;
var time = 0;

snakex[0] = 25 * 25
snakey[0] = 25 * 8

snakedir[0] = 1;


//LEVEL 0 Normal Screen
function level0() {
    ctx.fillStyle = "#2E8B57";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();


    //Creating external walls
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


//LEVEl 1 H
function level1() {
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
        currwallsize = 32;
    }
}

//LEVEL 2 ||
function level2() {
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
        currwallsize = 54;
    }

}


//gamescreen
function Draw_background() {
    level0();
    level1();
    level2();

}






//Setting direction of entire snake
function direction(d) {
    var u = currsize - 1;
    while (u > 0) {
        snakedir[u] = snakedir[u - 1]
        u = u - 1;
    }
    snakedir[0] = d;
}


//To increase size of snake every 100 sec 
function increase_size_of_snake() {
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



function move_snake(u) {
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

function draw_snake(u) {
    ctx.fillStyle = '#DC143C'
    ctx.beginPath()
    ctx.rect(snakex[u], snakey[u], 25, 25)
    ctx.fill()
    ctx.closePath()
}


function update() {
    Draw_background()
    if (time % 1000 == 0) {
        increase_size_of_snake();
    }
    for (let u = 0; u < currsize; u++) {
        draw_snake(u);
        if (time % 50 == 0) {
            move_snake(u);
        }
    }
    if (time % 50 == 0) {
        direction(snakedir[0]);
    }
    time = time + 1;
}





//Taking input from user pressing keys
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



//Collision Check
function collision_check() {
    var h = snakex[0];
    var k = snakey[0];

    //Checking for external Wall collision 
    if (h < 25 || h >= 1185) gameendistrue = 1;

    if (k < 25 || k >= 550) gameendistrue = 1;


    //Checking for internal wall collision
    for (let p = 0; p <= currwallsize; p++) {
        if (h == wallsx[p] && k == wallsy[p]) gameendistrue = 1;
    }


    //Checking for self collision
    for (let p = 1; p < currsize; p++) {
        if (h == snakex[p] && k == snakey[p]) gameendistrue = 1;
    }


    //ending the game if collision has occured
    if (gameendistrue == 1) {
        alert("Game Over ! \n" + "Your Score is " + currsize);

        clearInterval(one);
        clearInterval(two);
    }
}






//Running the game

two = setInterval(update, 0.1)
one = setInterval(collision_check, 0.1)