let a = {val: 'a'}
let b = {val: 'b'}
let c = {val: 'c'}
let d = {val: 'd'}
a.next = b
b.next = c
c.next = d
d.next = null
// a -> b -> c -> d
// 遍历链表
let p = a
while (p) {
  console.log(p.val)
  p = p.next
}
// 插入（在c与d之间插入e）
let e = {val: 'e'}
c.next = e
e.next = d
// 删除（删除e）
c.next = d

// 交换位置（a和b）
a = b
b.next = a
console.log(JSON.stringify(a))
console.log(a)
