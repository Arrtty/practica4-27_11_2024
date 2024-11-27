let suma = 0;
let n = prompt("Ingresa un numero");
    for (let i = 1; i <= n; i++) {
        suma += 1 / i;
    }
    console.log(`La suma de los recíprocos de los primeros ${n} números naturales es: ${suma}`);