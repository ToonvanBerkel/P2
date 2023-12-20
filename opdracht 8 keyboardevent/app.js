let turtle = document.getElementById("turtle");
let move = 0;
let movey = 0;

window.addEventListener("keydown", (ev) => {
    if (ev.key == "s") {
        movey+= 20
        turtle.style.marginTop = movey + "px";
        turtle.style.rotate = "180deg"
    } if (ev.key == "d") {
        move+= 20
        turtle.style.marginLeft = +move + "px";
        turtle.style.rotate = "90deg"
    } if (ev.key == "a") {
        move-= 20
        turtle.style.marginLeft = move + "px";
        turtle.style.rotate = "-90deg"
    } if (ev.key == "w") {
        movey-= 20
        turtle.style.marginTop = movey + "px";
        turtle.style.rotate = "0deg"
    } if (ev.keyCode == "40") {
        movey+= 20
        turtle.style.marginTop = movey + "px";
        turtle.style.rotate = "180deg"
    } if (ev.keyCode == "39") {
        move+= 20
        turtle.style.marginLeft = +move + "px";
        turtle.style.rotate = "90deg"
    } if (ev.keyCode == "37") {
        move-= 20
        turtle.style.marginLeft = move + "px";
        turtle.style.rotate = "-90deg"
    } if (ev.keyCode == "38") {
        movey-= 20
        turtle.style.marginTop = movey + "px";
        turtle.style.rotate = "0deg"
    }
})
