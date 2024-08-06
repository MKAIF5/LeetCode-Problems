// Median of Two Sorted Arrays

const findMedianSortedArrays = function (nums1, nums2) {
    // Concatenate the two arrays into a single array `arr`
    let arr = nums1.concat(nums2);
    // Sort the combined array in ascending order
    arr.sort((a, b) => (a - b));

    // Get the length of the combined and sorted array
    let n = arr.length;

    // Check if the length of the array is even
    if (n % 2 === 0) {
        // If even, calculate the median as the average of the two middle numbers
        return ((arr[n / 2] + arr[n / 2 - 1]) / 2);
    } else {
        // If odd, the median is the middle number
        return arr[Math.floor(n / 2)];
    }
};
console.log(findMedianSortedArrays([1, 3], [2]));

// Merge k Sorted Lists

const mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }

    // Continue merging until only one list remains
    while (lists.length > 1) {
        // Take the first two lists from the array
        let list1 = lists.shift();
        let list2 = lists.shift();

        // Merge the two lists and get the result
        let mergedList1List2 = mergeTwoLists(list1, list2);

        // Add the merged list back to the array
        lists.push(mergedList1List2);
    }

    // Return the single merged list
    return lists[0];
}

/**
 * Merge two sorted linked lists into one sorted linked list
 */
function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify the merging process
    let curr = new ListNode();
    let dummy = curr;

    // While both lists are not empty
    while (list1 && list2) {
        // Compare the values of the current nodes in both lists
        if (list1.val < list2.val) {
            // Attach the smaller node to the merged list
            curr.next = list1;
            // Move to the next node in list1
            list1 = list1.next;
        } else {
            // Attach the smaller node to the merged list
            curr.next = list2;
            // Move to the next node in list2
            list2 = list2.next;
        }
        // Move the current pointer in the merged list
        curr = curr.next;
    }

    // If there are remaining nodes in list1, attach them
    if (list1) {
        curr.next = list1;
    }

    // If there are remaining nodes in list2, attach them
    if (list2) {
        curr.next = list2;
    }

    // Return the merged list starting from the node after the dummy
    return dummy.next;
};

// Trapping Rain Water

let trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let lmax = height[left];
    let rmax = height[right];
    let ans = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            lmax = Math.max(lmax, height[left]);  // Update lmax
            ans += lmax - height[left];           // Calculate trapped water at left position
            left++;                               // Move the left pointer rightward
        } else {
            rmax = Math.max(rmax, height[right]); // Update rmax
            ans += rmax - height[right];          // Calculate trapped water at right position
            right--;                              // Move the right pointer leftward
        }
    }
    return ans;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// N-queens
const solveNQueens = function (n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill("."));

    const isValid = (row, columns) => {
        for (let i = 0; i < row; i++) {
            if (board[i][columns] === "Q") {
                return false
            };
            if (columns - (row - i) >= 0 && board[i][columns - (row - i)] === "Q") {
                return false
            }
            if (columns + (row - i) < n && board[i][columns + (row - i)] === 'Q') {

                return false;
            }
        }
        return true;
    };


    const solve = (row) => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let columns = 0; columns < n; columns++) {
            if (isValid(row, columns)) {
                board[row][columns] = "Q"
                solve(row + 1);
                board[row][columns] = "."
            }
        }
    }
    solve(0)
    return result
};

// Activity 5 : Word Ladder

// Task 5 : Solve the "Word Ladder" problem in LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words,
// and finds the length of the shortest transformation sequence from the begin word to
// the end word, such that only one letter can be changed at a time and each transformed
// word must exist in the word list. • Log the length of the shortest transformation
// sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
  
    const queue = [[beginWord, 1]]; // [currentWord, currentLength]
    const visited = new Set();
    visited.add(beginWord);
  
    while (queue.length > 0) {
      const [currentWord, currentLength] = queue.shift();
  
      if (currentWord === endWord) {
        return currentLength;
      }
  
      for (let i = 0; i < currentWord.length; i++) {
        const originalChar = currentWord[i];
        for (let charCode = 97; charCode <= 122; charCode++) {
          // 'a' to 'z'
          const newChar = String.fromCharCode(charCode);
          if (newChar === originalChar) continue;
  
          const newWord =
            currentWord.substring(0, i) + newChar + currentWord.substring(i + 1);
  
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push([newWord, currentLength + 1]);
          }
        }
      }
    }
  
    return 0;
  }
  
  // Example usage:
  console.log("Shortest transformation length from 'hit' to 'cog':");
  const length1 = ladderLength("hit", "cog", [
    "hot",
    "dot",
    "dog",
    "cog",
    "lot",
    "log",
  ]);
  console.log(length1); // Should print 5