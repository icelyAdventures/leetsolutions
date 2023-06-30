/**
 * 35. Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 */

var searchInsert = function(nums, target){
    // if(nums.indexOf(target) !== -1){ //This solution doesn't work because it's not O(log n) but O(n) instead
    //     return nums.indexOf(target);
    // }  
    
    // if(target > nums[nums.length - 1]){
    //     return nums.length + 1;
    // } 

    // if(target < nums[0]){
    //     return 0;
    // } 

    // for(let i = 1; i < nums.length - 1; i++){
    //     if(target > nums[ i - 1] && target < nums[i]){
    //         return i;
    //     }
    // }



    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

console.log(searchInsert([1,3,5,6], 7))