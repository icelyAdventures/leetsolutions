/**
 * 110. Balanced Binary Tree
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 *  Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true
   
    Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

    Example 3:
    Input: root = []
    Output: true
 */

var isBalanced = function(root){
    function getHeight(node){
        if(node === null){
            return 0;
        }

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        if(Math.abs(leftHeight - rightHeight) > 1){
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    function checkBalance(node){
        if(node === null){
            return true;
        }

        if(Math.abs(getHeight(node.left) - getHeight(node.right)) > 1){
            return false;
        }

        return checkBalance(node.left) && checkBalance(node.right);
    }

    return checkBalance(root);
}