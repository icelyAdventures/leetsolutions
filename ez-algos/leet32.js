/**
 * 144. Binary Tree Preorder Traversal
 * 
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.

    Example 1:
    Input: root = [1,null,2,3]
    Output: [1,2,3]

    Example 2:
    Input: root = []
    Output: []

    Example 3:
    Input: root = [1]
    Output: [1]
 */

var preorderTraversal = function(root){
    let target = [];

    // recursive function 
    function  preorder(node){
        if(!node){
            return;
        }

        target.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);
    return target;    
}