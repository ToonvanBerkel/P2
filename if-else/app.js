//javascript leest van boven naar beneden hij leest dit dus als eerste

let name = "Toon";
let age = 16; //voor berekeningen
let age_wrong = "16"; //alles tussen "" of '' is pure text
let count_wrong; //hier zit geen informatie in

let count;
count = 50; //hier geef je 50
count = 60; //hier wordt 50 vervangd met 60

let new_age = (age + 1); //hier wordt 1 bij 16 opgeteld dus het wordt 17
let new_age_wrong = (age_wrong + 1); //hier voegt hij 1 toe aan 16 dus het wordt 161

//zien in de console
console.log(name)
console.log(age)
console.log(new_age)
console.log(new_age_wrong)
console.log(count_wrong) //geeft aan undifined
console.log(count)

//console.log(last_name)    //hier weet hij biet wat last_name is omdat het nog niet gemaakt is

//let last_name = "van Berkel";     //deze zou dus voor de console.log(last name) moeten staan want nu werkt het niet

let element = document.getElementById("title") //hier pakt hij #title die in de h1 staat
console.log(element) //dit is hoe je test dat het goed is gelukt

element.innerText = "Hello world!"; //hie pat hij alles tussen de "" en zet hij dat in de h1
element.innerText = name; //hier zet hij de var name in h1 waardoor je mijn naam ziet
element.innerText = name + age; //hier zet hij de var name en age in h1 waardoor je mijn naam en mijn leeftijd ziet
element.innerText = name + " " + age; //hier zet hij de var name, alles wat in de "" staat en age in h1 waardoor je mijn naam een spatie en mijn leeftijd ziet

//javascript leest van boven naar beneden hij leest dit dus als laatste