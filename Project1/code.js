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
    myCirclex[t] = x;
    myCircley[t] = y;
    myColour[t] = myCurrColour;
    t = t + 1;
}

setInterval(update, 1)
