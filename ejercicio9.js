let entrada = prompt("Ingrese un numero (stop para salir): \n");
let pares = 0;
let impares = 0;
while(entrada != "stop"){
    if(entrada.toLowerCase()==="stop"){
        break;
    }
    if(entrada % 2 == 0){
        console.log("par")
        pares++;
    } else{
        console.log("impar");
        impares++;
    }
    entrada = prompt("Ingrese un numero (stop para salir): \n");
}