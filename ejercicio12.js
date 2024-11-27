let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let dias = [31,28,31,30,31,30,31,31,30,31,30,31];

let entrada = prompt("Ingrese un mes\n");
entrada = entrada.toLowerCase();
console.log(entrada);
console.log(meses[0]);
for(let i = 0; i < meses.length; i++){
    if(meses[i] == entrada){
        console.log(entrada + ", Días: "+ dias[i]);
        break;
    }
}
