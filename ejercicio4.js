let n =  Math.floor(Math.random() * (10 - 1 ) +1) + 1;
let guess = prompt("Adivina un número del 1 al 10\n");
while(guess != n){
    console.log("Mmm... no, intenta de nuevo:\n")
}
console.log("Correcto")