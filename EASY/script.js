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
    let result = 0;
    for (i = 0; i < s.length; i++) {
        const curr = myMap[s[i]]
        const next = myMap[s[i + 1]]
    }
    if (curr < next) {
        result += next - curr
        i++
    }
    else {
        result += curr
    }
    return result;
};

let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010", "1313579440F2036", "2921522980M5644"];

const seniorCounter = (details) => {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        let age = details[i].replace(details[i], `${details[i].charAt(11)} ${details[i].charAt(12)}`);
        let ageCheck = Number(age)
        if (ageCheck >= 60) {
            count++
        }
    }
    return count
}

seniorCounter(details)

// Solved 5 : Remove Element

const removeElement = (nums, val) => {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === val) {
        nums.splice(i, 1);
      }
    }
    return nums.length;
  };
  