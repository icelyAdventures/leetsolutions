/**
 * 14. Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function(strs){

    if(strs.length === 0){
        return ""
    }
    
    strs.sort();
    // console.log(strs)

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let prefix = "";

    for(let i = 0; i < strs.length; i++){
        if(firstStr[i] === lastStr[i]){
            break
        }
        prefix += firstStr[i]

    }

    return prefix

}

console.log(longestCommonPrefix(["abab","aba","abc"]))