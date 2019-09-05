// for (i=0; i<10; i++)
// console.log(i);
// for (i = 9; i > -1; i--){
// console.log (i);
// }

// let favouriteDrinks = ["coffee", "vimto", "pepsi"];

// console.log (favouriteDrinks[0]);
// console.log (favouriteDrinks[1]);
// console.log (favouriteDrinks[2]);

// let faveMov = ["trainspotting", "once flew over the cuckoos nest", "Hot Rod", "scarface", "irreversible"];
// faveMov.push("Avengers: End Game");
// faveMov.push("Terminator");


// for (filmIndex = 0; filmIndex < faveMov.length; filmIndex++){
//     console.log( faveMov [filmIndex])
// }

// const filmCheck = () =>{
//     if (faveMov [2] == "Ghostbusters") {
//     console.log ("boo, we want Ghostbusters!!");
//     }
//     else {
//     console.log ("Yay! its ghostbusters");
// }
// }
// filmCheck()

let number = 50
let currentNumber = 1;
while (currentNumber != number){
    console.log (currentNumber);
    currentNumber = (Math.floor(Math.random() * 50) +1);
} 
console.log (currentNumber);