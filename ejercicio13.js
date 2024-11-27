let arrOfEvens = [2, 4, 6, 8, 10]; 
let arrOfOdds = [1, 3, 5, 7, 9];
let sum = [];
for(let i = 0; i < arrOfEvens.length || i < arrOfOdds.length; i++){
    sum.push(arrOfEvens[i] + arrOfOdds[i]);
}
console.log(sum)