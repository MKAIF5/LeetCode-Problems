// console.log("JS LOGIC BUILDING");

//Array Parctices

// const myArray = [5, 64, 6, 54, "kaif"]

// myArray.pop(2)
// myArray.push(2 ,5, "kaif" , true , 2.5)

// console.log(myArray);



//Loop practices

// for(i=1; i<=5; i++){
//     for(j=1; j<=3; j++){
//         console.log(i);
//     }
// }

// let i = 1
// while (i <= 5) {
//     i++
// }
// console.log(i);

// Date and Time Practices

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const now = new Date()
// const currentDay = now.getDay()

// console.log(currentDay.toPrecision())

// console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

// Write a JavaScript program to print the current window contents

// function print(){
//     console.log(window);
// }

// print()

const number1 = prompt("Please type some number here");

const firstNumber = parseInt(number1);


const number2 = prompt("Please type second number here");

const secondNumber = parseInt(number2);
const randomNumber = Math.round(Math.random() * (firstNumber + 1)) + firstNumber;

const sentence = " Hi, is your number " + randomNumber + "?";

console.log(sentence)
