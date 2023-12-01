let budget = 100;
let element = document.getElementById("title");

let product = prompt("Hoeveel kost het product dat je wilt kopen?");

if (product <= budget) {
    element.innerText = "U heeft genoeg geld";
    element.style.color = "green";
}else {
    element.innerText = "Helaas, te weinig geldt";
    element.style.color = "red";
}