const prompt = require('prompt-sync')
({sigint: true})

let numberedDay = Number(prompt('Enter the number for the day:'))


if(numberedDay === 1){
    console.log("Monday")
}else if(numberedDay === 2){
    console.log("Tuesday")
}else if(numberedDay === 3){
    console.log("Wednesday")
}else if(numberedDay === 4){
    console.log("Thursday")
}else if(numberedDay === 5){
    console.log("Friday")
}else if(numberedDay === 6){
    console.log("Saturday")
}else if(numberedDay === 7){
    console.log("Sunday")
}else {
    console.log("error")
}