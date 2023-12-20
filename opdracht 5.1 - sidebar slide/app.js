let nav = document.getElementById("nav")

window.addEventListener('mousemove', function(e) {

    if(e.clientX < 20) {
        nav.style.width = "20vw";
    } if (e.clientX > 210) {
        nav.style.width = "0vw";
    }
});