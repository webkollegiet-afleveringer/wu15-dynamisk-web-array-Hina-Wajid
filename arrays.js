document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];
   
   /* Opgave 1 */
    let newNumbers = numbersArray.filter((tal)=>tal>20);
    console.log("Opgave 1", newNumbers)
    // --- Løs opgaverne herunder --- 
/* Opgave 2 */
catsArray.push("Sniffles");
console.log(catsArray);

/* Opgave 3 */
console.log("Opgave 3a", dogsArray.includes(  "Trixie"))
console.log("Opgave 3b", dogsArray.includes(  "Baxter"))



/* opgave 4 */

const found = catsArray.find((element) => element == "Bagheera");
console.log(found);
const found2 = catsArray.find((element) => element == "Salem");
console.log(found2);

/* Opave 5 */

console.log("Opgave 5",numbersArray.map((x) => x * 3))

/* opgave 6 
Udskriv alle hundene i dogsArray i én lang streng.
(Sådan her: BarneyMollyBaxter...)
Udskriv strengen konsollen:
console.log("Opgave 6", ...)*/

console.log("Opgave 6",dogsArray.join(""))

/* opgave 7 
Find ud af hvilket index "Mango" har i fruitsArray.
Udskriv indexet i konsollen. */

 console.log("Opgave 7a",fruitsArray.indexOf("Mango"));
 console.log("Opgave 7b",fruitsArray.indexOf( "Blåbær"));


/* opgave 8 
Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
console.log("Opgave 8", ...)*/


const dog_index= dogsArray.indexOf("Polly");
console.log(dog_index);
/* toSpliced( start index, hvor mange element der skal fjernes) */
console.log("Opgave 8",dogsArray.toSpliced(dog_index,1));


}) 


// ends DOMContentLoaded''

// Udskriv det nye array i konsollen:


/* 
Map
join
filter
include
find
toSpliced
indexOf
 */
