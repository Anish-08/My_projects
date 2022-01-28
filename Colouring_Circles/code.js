var canvas = document.getElementById("myCanva");
var mcv = canvas.getContext("2d");
var x = 683;
var y = 300;
const myColour = [];
const myCirclex = [];
const myCircley = [];
var myCurrColour = "#000000"
t = 1;

class myTuple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    prod() {
        return this.x * this.y
    }
}

function makegreen() {
    myCurrColour = "green";
}

function makeyellow() {
    myCurrColour = "yellow";
}

function makeblack() {
    myCurrColour = "black";
}

function makewhite() {
    myCurrColour = "white";
}

function makered() {
    myCurrColour = "red";
}

function makeorange() {
    myCurrColour = "orange";
}

function makeblue() {
    myCurrColour = "darkblue";
}

function makepink() {
    myCurrColour = "pink";
}


canvas.width = 1366;
canvas.height = 600;

function update() {
    mcv.fillStyle = "#00FFFF";
    mcv.beginPath();
    mcv.rect(0, 0, canvas.width, canvas.height);
    mcv.fill();
    mcv.closePath();




    s = 1;
    while (s < t + 1) {
        mcv.fillStyle = myColour[s - 1];
        mcv.beginPath();
        mcv.arc(myCirclex[s - 1], myCircley[s - 1], 20, 0, 2 * Math.PI);
        mcv.fill();
        mcv.closePath();
        s = s + 1;
    }

    mcv.fillStyle = myCurrColour;
    mcv.beginPath();
    mcv.arc(x, y, 10, 0, 2 * Math.PI);
    mcv.fill();
    mcv.closePath();
}



onmousemove = function(e) {
    x = e.clientX;
    y = e.clientY;
};
onmousedown = function(e) {
    myInterval = setInterval(whilemousedown, 1);
}

onmouseup = function(e) {
    this.clearInterval(myInterval);
}

function whilemousedown() {
    myCirclex[t] = x;
    myCircley[t] = y;
    myColour[t] = myCurrColour;
    t = t + 1;
}
setInterval(update, 1)