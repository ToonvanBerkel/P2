function add() {
    let num1 = parseFloat(document.getElementById("number_one").value);
    let num2 = parseFloat(document.getElementById("number_two").value);
    document.getElementById("result").innerText = "Antwoord: " + (num1 * num2);
}

function minus() {
    let num1 = parseFloat(document.getElementById("number_one").value);
    let num2 = parseFloat(document.getElementById("number_two").value);
    document.getElementById("result").innerText = "Antwoord: " + (num1 * num2);
}

function multiply() {
    let num1 = parseFloat(document.getElementById("number_one").value);
    let num2 = parseFloat(document.getElementById("number_two").value);
    document.getElementById("result").innerText = "Antwoord: " + (num1 * num2);
}

function divide() {
    let num1 = parseFloat(document.getElementById("number_one").value);
    let num2 = parseFloat(document.getElementById("number_two").value);
    if (num2 !== 0) {
        document.getElementById("result").innerText = "Antwoord: " + (num1 * num2);
    } else {
        document.getElementById("result").innerText = "Kan niet delen door 0";
    }
}

console.log(num1)