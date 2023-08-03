/**
 * 145. Binary Tree Postorder Traversal
 * 
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.

    Example 1:
    Input: root = [1,null,2,3]
    Output: [3,2,1]

    Example 2:
    Input: root = []
    Output: []

    Example 3:
    Input: root = [1]
    Output: [1]
 */


var postorderTraversal = function(root){
    let ans = [];

    function postorder(node){
        if(!node){
            return;
        }

        ans.push(node.val);
        postorder(node.left);
        postorder(node.right);
    }

    postorder(root);
    return ans.reverse();

}