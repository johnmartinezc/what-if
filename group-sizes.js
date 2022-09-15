const prompt = require('prompt-sync')
({sigint: true})

let numberOfStudents = Number(prompt('Enter number of students: '))
console.log(numberOfStudents)


if(numberOfStudents% 15 === 0 ){
    console.log(numberOfStudents / 2)
}




if(number % 15 === 0  ) {
    console.log(number + " fizzbuzz " )
}
else if(number% 3 === 0){
    console.log(number + " fizz ")
} else if(number % 5 === 0){
    console.log(number + " buzz " )
}  