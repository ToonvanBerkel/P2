document.getElementById("title").style.fontSize="50px";
document.getElementById("title").style.color="red";
document.getElementById("title").style.fontWeight="normal";

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    document.getElementById("button").style.backgroundColor="red";
})