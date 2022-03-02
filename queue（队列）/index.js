/* 队列 */
/**
 *
 * 队列是一个先进先出的数据结构；
 * JavaScript中没有队列，但可以用Array实现队列的所有功能。
 *
 * 入队（enqueue）：Array.prototype.push()
 * 出队（dequeue）：Array.prototype.shift()
 * */
// 定义一个队列
const queue = []
// 入队操作
queue.push(1)
queue.push(2)
// 出队操作
const item1 = queue.shift() // 1
const item2 = queue.shift() // 2
