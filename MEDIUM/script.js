// Reverse Integer

const takeInteger = (integer) => {
  let reverseConverted = parseInt(integer.toString().split("").reverse().join(""), 10);

  if (integer < 0) {
    return reverseConverted * -1
  }
  return reverseConverted
}

console.log(takeInteger("-327"));

// Add Two Numbers

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

// Longest Substring Without Repeating Characters
function logLength(s) {
  let n = s.length;
  let maxLength = 0;
  let start = 0;
  let charMap = new Map()
  for (let i = 0; i < n; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(charMap.get(s[i], + 1, start))
    }
    charMap.set(s[i], i)
    start = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}
console.log(logLength("andbasfb"));
console.log(logLength(" "));
console.log(logLength("bbbbbbbbbb"));

// Container With Most Water
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// 3Sum

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 8, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([]));

// Group Anagrams

const groupAnagrams = function (strs) {

  const map = new Map();
  for (const str of strs) {
    const sortedArgument = str.split("").sort().join("");

    if (!map.has(sortedArgument)) {
      map.set(sortedArgument, [])
    }

    map.get(sortedArgument).push(str)
  }

  return Array.from(map.values())
};

console.log(groupAnagrams(["eat", "tab", "bat"]));

// Integer to Roman

const intToRoman = function (num) {

  const M = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 9,
    "IV": 4,
    "I": 1
  }
  let result = "";
  Object.entries(M).forEach(([k , v]) =>{
    result += k.repeat(Math.floor(num / v));
    num %= v
  })
  return result;
};