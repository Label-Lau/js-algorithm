/**
 * 1. 新建一个空链表。
 * 2. 遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加。
 * */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0) // 新建一个空链表
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0 // 进位数字
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry
    carry = Math.floor(val / 10) // 计算进位
    p3.next = new ListNode(val % 10) // 计算结果
    // 将指针往下走
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  // 如果最后存在进位，将进位放到结果的 next 上
  if (carry) {
    p3.next = new ListNode(carry)
  }
  return l3.next
};
