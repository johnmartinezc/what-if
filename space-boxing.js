const prompt = require('prompt-sync')
({sigint: true})

let planets = ("1.Venus \n" + "2.Mars\n"+"3.Jupiter \n"+"4.Saturn \n"+"5.Uranus \n"+"6.Neptune")
console.log(planets)


let platentNumber = Number(prompt('Enter planet number:'))
let result = true

if(platentNumber === 1){
    console.log("You picked Venus!")
} else if (platentNumber === 2){
    console.log("You picked Mars!")
}else if (platentNumber === 3){
    console.log("You picked Jupiter!")
}else if (platentNumber === 4){
    console.log("You picked Saturn!")
}else if (platentNumber === 5){
    console.log("You picked Uranus!")
}else if (platentNumber === 6){
    console.log("You picked Neptune!")
} else {
    console.log("Invalid")
    return 
}


let userWeight = Number(prompt('Enter your earth weight: '))


if (platentNumber === 1){
    console.log("You need to weight: " + userWeight * 0.78 + " to make weight in Venus!")
}else if (platentNumber === 2){
    console.log("You need to weight: " + userWeight * 0.39 + " to make weight in Mars!")
}else if (platentNumber === 3){
    console.log("You need to weight: " + userWeight * 2.65 + " to make weight in Jupiter!")
}else if (platentNumber === 4){
    console.log("You need to weight: " + userWeight * 1.17 + " to make weight in Saturn!")
}else if (platentNumber === 5){
    console.log("You need to weight: " + userWeight * 1.05 + " to make weight in Uranus!")
}else if (platentNumber === 6){
    console.log("You need to weight: " + userWeight * 1.23    + " to make weight in Neptune!")
}else{
    
}





