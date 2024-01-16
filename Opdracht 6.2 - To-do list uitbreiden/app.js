let button = document.getElementById("addToDo");
let input = document.getElementById("inputField");
let containerToDo = document.getElementById("toDoContainer");

button.addEventListener('click', function() {
    let para = document.createElement("p");
    para.innerText = input.value;

    para.addEventListener('click', function() {
        para.style.textDecoration = "line-through";
    });

    para.addEventListener('dblclick', function() {
        containerToDo.removeChild(para);
    });

    containerToDo.appendChild(para)
    input.value = '';
})