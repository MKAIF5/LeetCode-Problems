// // Solved 1 : Create Hello World Function 

// const createHelloWorld = function () {

//     return function (...args) {

//         return "hello world"
//     }
// };

// createHelloWorld();

// // Solved 2 : Counter

// const createCounter = function (n) {

//     return function () {

//     };
// };

// // Solved 3 : Palindrome Number

// const isPalindrome = function (x) {
//     let reversed = x.toString().split("").reverse().join("")
//     return x.toString() === reversed
// };

// //Solved 4 : Roman Into Integer

// const romanToInt = function (s) {
//     // const myMap{
//     //     "I": 1 ,
//     //     "V":5,
//     //     "X":10,
//     //     "L":50,
//     //     "C":100,
//     //     "D":500,
//     //     "M":1000
//     // }
//     let result = 0;
//     for (i = 0; i < s.length; i++) {
//         const curr = myMap[s[i]]
//         const next = myMap[s[i + 1]]
//     }
//     if (curr < next) {
//         result += next - curr
//         i++
//     }
//     else {
//         result += curr
//     }
//     return result;
// };

// let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010", "1313579440F2036", "2921522980M5644"];

// const seniorCounter = (details) => {
//     let count = 0;
//     for (let i = 0; i < details.length; i++) {
//         let age = details[i].replace(details[i], `${details[i].charAt(11)} ${details[i].charAt(12)}`);
//         let ageCheck = Number(age)
//         if (ageCheck >= 60) {
//             count++
//         }
//     }
//     return count
// }

// seniorCounter(details)

// // Solved 5 : Remove Element

// const removeElement = (nums, val) => {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//         }
//     }
//     return nums.length;
// };


// // Solved : Longest Common Prefix

// const longestCommonPrefix = function (strs) {

//     if (strs.length === 0) {
//         return "";
//     }

//     let prefix = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) != 0) {
//             prefix = prefix.substring(0, prefix.length - 1)
//         }
//     }
//     return prefix
// }

// // Solved :  remove duplicates from sorted array 

// const removeDuplicates = function (nums) {
//     let index = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] !== nums[i + 1]) {
//             nums[index] = nums[i + 1]
//         }
//     }
//     return index
// };

// // Solved : Valid Anagram

// const isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false
//     }
//     let map = {};

//     for (let i = 0; i < s.length; i++) {
//         let letter = s[i];
//         if (!map[letter]) {
//             map[letter] = 1
//         } else {
//             map[letter]++
//         }
//     }

//     for (let i = 0; i < t.length; i++) {
//         let letter = t[i];
//         if (map[letter] === undefined) {
//             return false
//         }
//         if (map[letter] < 1) {
//             return false
//         }
//         map[letter]--
//     }
//     return true
// }

// // Solved : Counter

// const createCounters = (n) => {

//     let counter = -1
//     return () => {
//         counter++
//         return n + counter
//     }
// }

// // Solved : Plus One 

// const plusOne = function (digits) {

//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i] = digits[i] + 1
//             return digits
//         }

//         else {
//             digits[i] = 0
//         }
//     }
//     digits[i].unshift(1)
//     return digits

// };

// console.log(plusOne(5));

// // Solved : Single Number

// const singleNumber = function (nums) {
//     let emptyObject = {};

//     for (let i = 0; i < nums.length; i++) {
//         emptyObject[nums] = emptyObject[nums] + 1 || 1
//     }

//     for (const key in emptyObject) {
//         if (emptyObject[key] === 1) {
//             return key
//         }
//     }
// };

// // Solved : Length Of Last Word

// const lengthOfLastWord = function (s) {
//     return s.trim().split(" ").pop().length
// };

// console.log(lengthOfLastWord("luffy is still joyboy"));



// // const reverseString = function (s) {
// //     return s.slice().reverse().join()
// // };

// // console.log(reverseString(["h" ,"e" , "l" , "l" , "o"]));

// const reverseString = function (s) {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         // Swap the characters at the left and right pointers
//         [s[left], s[right]] = [s[right], s[left]];
//         left++;
//         right--;
//     }
// };

// // Test cases
// let s1 = ["h", "e", "l", "l", "o"];
// reverseString(s1);
// console.log(s1); // Output: ["o", "l", "l", "e", "h"]

// let s2 = ["H", "a", "n", "n", "a", "h"];
// reverseString(s2);
// console.log(s2); // Output: ["h", "a", "n", "n", "a", "H"]

// // Solved : Is Object Empty

// const isEmpty = function (obj) {

//     if(Object.keys(obj).length === 0){
//         return true
//     }

//     else{
//         return false
//     }
// };

// console.log(isEmpty({"x": 5, "y": 42}));


// Solved : Counter ||

// const createCounter = function (init) {
//     let value = init

//     function increment() {
//         value++
//         return value
//     }

//     function decrement() {
//         value--
//         return value
//     }

//     function reset() {
//         value = init
//         return value
//     }

//    return {
//     increment,
//     decrement,
//     reset
//    }
// };

// let counter = createCounter(5);

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());

// Solved : Find The Index Of The First Occurrence In A String

const strStr = function (haystack, needle) {


    if (needle === "") {
        return 0
    }

    if (needle.length > haystack.length) {
        return -1
    }
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.substring(i , i + needle.length) === needle){
     
            return i
        }
    }
    return -1

};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("hell0", "ll"));
console.log(strStr("leetcode", "leeto"));