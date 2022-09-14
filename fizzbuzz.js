const prompt = require('prompt-sync')
({sigint: true})

let number = Number(prompt('Enter a number: '))
console.log(number)

let f = "fizz";
let b = "buzz";
for (let num = 1; num <=700 ; num++) {
    if (num% 3 === 0 && num % 5 ===0){
    console.log(num + f + b);
                }
    else if (num % 5 === 0){
    console.log(num+b);
                }
    else if (num % 3 === 0){
    console.log(num+f);
                }
    else {
    console.log(num);
                }
            }