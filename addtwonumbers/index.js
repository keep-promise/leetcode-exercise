// @algorithm @lc id=2 lang=javascript 
// @title add-two-numbers
// @test([2,4,3],[5,6,4])=[7,0,8]
// @test([0],[0])=[0]
// @test([9,9,9,9,9,9,9],[9,9,9,9])=[8,9,9,9,0,0,0,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(-1);
  let cur = dummy;
  let carry = 0;
  while(l1 || l2) {
    let d1 = l1 ? l1.val : 0;
    let d2 = l2 ? l2.val : 0;
    let sum = d1 + d2 + carry;
    carry = sum >= 10 ? 1 : 0;
    let next = new ListNode(sum % 10);
    cur.next = next;
    cur = cur.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  if (carry === 1) {
    cur.next = new ListNode(1)
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 7,
      next: null,
    },
  },
};
