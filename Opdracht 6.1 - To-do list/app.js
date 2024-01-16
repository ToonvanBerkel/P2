let button = document.getElementById("addToDo");
let input = document.getElementById("inputField");
let containerToDo = document.getElementById("toDoContainer");

button.addEventListener('click', function() {
    let para = document.createElement("p");
    para.innerText = input.value;
    containerToDo.appendChild(para)
    input.value = '';
})