let budget = 60;
let product = 60;
let element = document.getElementById("title");

if (budget >= product) {
    element.innerText = "U heeft genoeg geld";
    element.style.color = "green";
}else {
    element.innerText = "Helaas, te weinig geldt";
    element.style.color = "red";
}