let nav = document.getElementById('nav');
let pos = window.pageYOffset;

window.addEventListener('scroll', ()=> {
    let currentpos = window.pageYOffset;

    if(pos < currentpos) {
        nav.classList.add('hide');
    } else {
        nav.classList.remove('hide');
    }

    pos = currentpos;
})

let test = '1002';
console.log(test);