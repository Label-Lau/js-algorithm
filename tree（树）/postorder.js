const bt = require("./bt.js");
/* 二叉树的后序遍历 */

/* 递归版 */
// 1. 对根节点的左子树进行后序遍历；
// 3. 对根节点的右子树进行后序遍历。
// 2. 访问根节点；
const postorder1 = (root) => {
  if (!root) return
  postorder1(root.left)
  postorder1(root.right)
  console.log(root.val)
}

/* 非递归版 */
const postorder2 = (root) => {
  if (!root) return
  const outputStack = []
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.val)
  }

}

postorder1(bt)
postorder2(bt)
