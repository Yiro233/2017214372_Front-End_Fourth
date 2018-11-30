function display(){
    var btn1 = document.createElement("BUTTON");
    var t1 = document.createTextNode("↑");
    btn1.style.width = 50 + "px";
    btn1.style.height = 30 + "px";
    btn1.style.marginLeft = 5 + "px";
    btn1.appendChild(t1);
    document.body.appendChild(btn1);

    var btn2 = document.createElement("BUTTON");
    var t2 = document.createTextNode("↓");
    btn2.style.width = 50 + "px";
    btn2.style.height = 30 + "px";
    btn2.style.marginLeft = 5 + "px";
    btn2.appendChild(t2);
    document.body.appendChild(btn2);

    var br = document.createElement("BR")
    document.body.appendChild(br);


    var btn3 = document.createElement("BUTTON");
    var t3 = document.createTextNode("←");
    btn3.style.width = 50 + "px";
    btn3.style.height = 30 + "px";
    btn3.style.marginLeft = 5 + "px";
    btn3.appendChild(t3);
    document.body.appendChild(btn3);


    var btn4 = document.createElement("BUTTON");
    var t4 = document.createTextNode("→");
    btn4.style.width = 50 + "px";
    btn4.style.height = 30 + "px";
    btn4.style.marginLeft = 5 + "px";
    btn4.appendChild(t4);
    document.body.appendChild(btn4);

    var br = document.createElement("BR")
    document.body.appendChild(br);

    var btn5 = document.createElement("BUTTON");
    var t5 = document.createTextNode("放大");
    btn5.style.width = 50 + "px";
    btn5.style.height = 30 + "px";
    btn5.style.marginLeft = 5 + "px";
    btn5.appendChild(t5);
    document.body.appendChild(btn5);


    var btn6 = document.createElement("BUTTON");
    var t6 = document.createTextNode("缩小");
    btn6.style.width = 50 + "px";
    btn6.style.height = 30 + "px";
    btn6.style.marginLeft = 5 + "px";
    btn6.appendChild(t6);
    document.body.appendChild(btn6);

    var box = document.createElement("DIV");
    box.style.width = 100 + "px";
    box.style.height = 100 + "px";
    box.style.background = "red";
    box.style.position = "absolute";
    box.style.top = 110 + "px";
    box.style.left = 10 + "px";
    document.body.appendChild(box);
    function moveTop() {
        var oldTop = parseInt(box.style.top);
        if (oldTop - 20 >= 10)
            box.style.top = oldTop - 20 + "px";
    }
    function moveDown() {
        var oldTop = parseInt(box.style.top);
        box.style.top = oldTop + 20 + "px";
    }
    function moveLeft() {
        var oldLeft = parseInt(box.style.left);
        if (oldLeft - 20 >= 10)
            box.style.left = oldLeft - 20 + "px";
    }
    function moveRight() {
        var oldLeft = parseInt(box.style.left);
        box.style.left = oldLeft + 20 + "px";
    }
    function inLarge() {
        var oldWidth = parseInt(box.style.width);
        var oldHeight = parseInt(box.style.height);
        box.style.width = oldWidth + 20 + "px";
        box.style.height = oldHeight + 20 + "px";
    }
    function shrink() {
        var oldWidth = parseInt(box.style.width);
        var oldHeight = parseInt(box.style.height);
        if (oldWidth - 20 > 0) {
            box.style.width = oldWidth - 20 + "px";
            box.style.height = oldHeight - 20 + "px";
        }
    }
    btn1.onclick = moveTop;
    btn2.onclick = moveDown;
    btn3.onclick = moveLeft;
    btn4.onclick = moveRight;
    btn5.onclick = inLarge;
    btn6.onclick = shrink;
    box.style.transitionDuration = 500 + "ms";
}
