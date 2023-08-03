/**
 * 136. Single Number
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
 */

var singleNumber = function(nums){
    if(nums.length === 1){
        return nums[0];
    }

    let sortedArr = nums.sort();
    let p1 = 0;
    let p2 = 1;

    while(p1 < sortedArr.length){
        if(sortedArr[p1] === sortedArr[p2]){
            p1 += 2;
            p2 += 2;
        } else {
            return sortedArr[p1]
        }
    }

}

console.log(singleNumber([5,1,2,1,2]));