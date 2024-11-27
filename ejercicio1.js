let n = prompt("Ingrese un año\n");
if (n % 4 === 0) {
        if (n % 100 === 0) {
            if (n % 400 === 0) {
                console.log("Bisiesto"); 
            } else {
                console.log("No bisiesto");; 
            }
        } else {
            console.log("Bisiesto");; 
        }
    } else {
        console.log("No bisiesto");; 
    }