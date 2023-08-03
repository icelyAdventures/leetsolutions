/** 
 * 69. Sqrt(x)
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
 * The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

    Example 1:
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.

    Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

var mySqrt = function(x) {
    let p1 = 0;
    let p2 = x;
    

    while (p1 <= p2){
        let mid = Math.floor((p1 + p2) / 2);
        let midNumber = mid * mid;

        if(midNumber === x){
            return mid;
        } else if(midNumber > x){
            p2 = mid - 1;
        } else {
            p1 = mid + 1
        }
    }

    return p2
}

console.log(mySqrt(8));