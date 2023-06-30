/**
 * 21. Merge Two Sorted List
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 */


// function ListNode(val, next) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
// }

// var mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2;
//     else if (!list2) return list1;
//     else if (list1.val <= list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2
//     }
// };

var mergeTwoLists = function(list1, list2) {
    const sentinel = {
        val: -1,
        next: null
    }

    let head = sentinel
    while (list1 && list2) {
        if (list1.val > list2.val) {
            head.next = list2
            list2 = list2.next
        } else {
            head.next = list1
            list1 = list1.next
        }
        
        head = head.next
    }

    head.next = list1 || list2

    return sentinel.next
};


console.log(mergeTwoLists([1,2,4], [1,3,4] ))