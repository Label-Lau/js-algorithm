const a = {val: '1'};
const b = {val: '2'};
const c = {val: '3'};
const d = {val: '4'};
const e = {val: '5'};
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// const reverseList = (head) => {
//   let cur = head
//   let pre = null
//   while (cur) {
//     const temp = cur.next
//     cur.next = pre
//     pre = cur
//     cur = temp
//   }
//   return pre
// }


const reverseList = (head) => {
  let cur = head
  let pre = null
  while (cur) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
console.dir(JSON.stringify(reverseList(a)))
