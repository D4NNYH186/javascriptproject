if (1 === "1") {
    console.log (true);
}
else {
    console.log (false);
}

if (1 != "1") {
    console.log (true);
}
else {
    console.log (false);
}

// let age = 33;
let country = "UK"; 
if (age >17 && country == "UK") {
    console.log ("Yes you're the right age in the right country")
}
else {
    console.log ("Sorry you are either too young or in the wrong country")
}

let password = "12345678";

if (password.length >= 8) {
    console.log("Password length correct")
}
else {
    console.log("Password too short") 
}

/*let num = 12

if (num % 3 === 0 ||num  % 5 === 0 ) {
console.log ("This number is divisible by 3 or 5")
}
else {
console.log ("This number is not divisible by 3 or 5")
}

let num = 15;

if (num % 3 === 0 && num % 5 === 0){
    console.log("fizz buzz")
}

else if (num % 3 === 0){
console.log("fizz")
}
else if (num % 5 === 0){
    console.log("buzz")
}
else if
    console.log ("num"){
}
*/


let space1 = "X";
let space2 = "X";
let space3 = "X"
let space4 = " ";
let space5 = "X";
let space6 = " "
let space7 = "X";
let space8 = " "
let space9 = " "


console.log("    |   |   ");
console.log(`${space1}   | ${space2} | ${space3}   `);
console.log("    |   |   ");
console.log("- - - - - - - ");
console.log("    |   |   ");
console.log(`${space4}   | ${space5} | ${space6}   `);
console.log("    |   |   ");
console.log("- - - - - - - ");
console.log("    |   |   ");
console.log(`${space7}   | ${space8} | ${space9}   `);
console.log("    |   |   ");

if (space1==space2 && space2==space3){
    console.log ("player wins")
}
else {
    console.log ("you have failed")
}


let age = 18

if (age < 19){
    console.log ("child £8")
}
else (age == 18 && <= 59){
    console.log ("adult £10.95")
}
if else {
    console.log ("senior £7.50")
}