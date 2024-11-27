let n =  Math.floor(Math.random() * (10 - 1 ) +1) + 1;
let n2 =  Math.floor(Math.random() * (10 - 1 ) +1) + 1;

let sum = prompt("Cual es la suma de " + n + " y "+ n2 +"?\n");
while(sum != n+n2){
    sum = prompt("Incorrecto, intente de nuevo: \n")
}
console.log("Correcto")