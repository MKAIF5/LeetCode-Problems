// Solved 1 : Create Hello World Function 

const createHelloWorld = function () {

    return function (...args) {

        return "hello world"
    }
};

createHelloWorld();

// Solved 2 : Counter

const createCounter = function (n) {

    return function () {

    };
};

// Solved 3 : Palindrome Number

const isPalindrome = function (x) {
    let reversed = x.toString().split("").reverse().join("")
    return x.toString() === reversed
};

//Solved 4 : Roman Into Integer

const romanToInt = function (s) {
    // const myMap{
    //     "I": 1 ,
    //     "V":5,
    //     "X":10,
    //     "L":50,
    //     "C":100,
    //     "D":500,
    //     "M":1000
    // }
    let result  = 0;
    for (i = 0; i < s.length; i++) {
        const curr = myMap[s[i]]
        const next = myMap[s[i+ 1]]
    }
    if(curr < next){
       result += next - curr
       i++
    }
    else{
     result += curr
    }
    return result;
};