const prompt = require('prompt-sync')
({sigint: true})

let number = Number(prompt('Enter a number: '))
console.log("You have entered: "+ number)



if(number % 15 === 0  ) {
    console.log(number + " fizzbuzz " )
}
else if(number% 3 === 0){
    console.log(number + " fizz ")
} else if(number % 5 === 0){
    console.log(number + " buzz " )
}  

