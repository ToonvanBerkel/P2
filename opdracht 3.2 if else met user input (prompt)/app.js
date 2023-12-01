let budget = 100;
let product = 60;
let element = document.getElementById("title");

let price = prompt("Hoeveel kost het product dat je wilt kopen?");

if (price <= budget) {
    element.innerText = "U heeft genoeg geld";
    element.style.color = "green";
}else {
    element.innerText = "Helaas, te weinig geldt";
    element.style.color = "red";
}