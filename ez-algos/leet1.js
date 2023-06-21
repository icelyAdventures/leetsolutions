/**
 * 1. Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

function twoSum(num, target){
    // Object(n^2) method:
    // for(let i =0; i < num.length - 1; i++){
    //     for(let j = 1; j < num.length; j++){
    //         if(num[i] + num[j] === target){
    //             return [i,j]
    //         }
    //     }
    // }
    

    // Hashmap method: 
    // const numMap = new Map();
    // for(let i = 0; i < num.length; i++){
    //     const complement = target - num[i];

    //     if(numMap.has(complement)){
    //         return [numMap.get(complement), i]
    //     }

    //     numMap.set(num[i], i)
    // }

    // return [];

    let left = 0;
    let right = num.length - 1;

    while(left < right) {
        const sum = num[left] + num[right];

        if(sum === target){
            return [left, right];
        } else if(sum < target){
            left++;
        } else {
            right--;
        }
    }

    return []
}

console.log(twoSum([2, 3, 4, 10, 7, 11, 15], 9))