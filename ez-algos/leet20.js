/**
 * 101. Symmetric Tree
 * 
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

    Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true

    Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false
 */

var isSymmetric = function(root) {
    if(root === null){
        return true;
    }

    return isMirror(root.left, root.right);

    function isMirror(node1, node2){
        if(node1 === null && node2 === null){
            return true;
        } 
        
        if(node1 === null || node2 === null){
            return false;
        } 

        const outerPair = isMirror(node1.left, node2.right);
        const innerPair = isMirror(node1.right, node1.left);

        return outerPair && innerPair;
    }

}