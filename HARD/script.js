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