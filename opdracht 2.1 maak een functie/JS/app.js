const h1 = document.querySelector("h1")

function kleur_aanpassen() {
    document.getElementById('h1').style.color = "red";
    document.getElementById('h1').innerHTML = "Inhoud aangepast!";
    console.log('de functie werkt');
}