/**
 * 125. Valid Palindrome
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

 

    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
    
    Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
 */

    var isPalindrome = function(s){

        //own solution : beats 50.97% runtime, 30.7% memory
        //using too much memory


        // let regex = /[A-Za-z]/;
        // let newStr = "";

        // for(let i = 0; i < s.length; i++){
        //     if(regex.test(s[i])){
        //         newStr += s[i];
        //     }
        // }

        // let convertedStr = newStr.toLowerCase();

        


        // return convertedStr.split("").reverse().join("") === convertedStr
        // return newStr

        //alternative solution
        //beats 84.74% runtime, 55.73% memory

        // let regex = /[A-Za-z0-9]/;
        // let newStr = "";
        
        // for(let i = 0; i < s.length; i++){
        //     if(regex.test(s.charAt(i))){
        //         newStr += s.charAt(i)
        //     }
        // }
       
    
        // const finalStr = newStr.toLowerCase();
        // let i = 0;
        // let j = finalStr.length - 1;
    
        // while(i < j){
        //     if(finalStr.charAt(i) === finalStr.charAt(j)){
        //         i++;
        //         j--;
        //     } else {
        //         return false;
        //     }
        // }
    
        // return true;

        // alternative solution and shorter one compared to solution 1
        // let newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        // return newStr.split("").reverse().join("") === newStr;



        let newStr = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
        let p1 = 0;
        let p2 = newStr.length - 1;

        while(p1 < p2){
            if(newStr[p1] !== newStr[p2]){
                return false;
            }
            p1++;
            p2--;
        }
        return true;

    }

    console.log(isPalindrome("A man, a plan, a canal: Panama"));

