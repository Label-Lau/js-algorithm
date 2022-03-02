const bt = require("./bt.js");
/* 二叉树的先序遍历 */

/* 递归版 */
// 1. 访问根节点；
// 2. 对根节点的左子树进行先序遍历；
// 3. 对根节点的右子树进行先序遍历。

const preorder1 = (root) => {
  if (!root) return;
  console.log(root.val);
  preorder1(root.left);
  preorder1(root.right);
};

/* 非递归版 */
const preorder2 = (root) => {
  if (!root) return;
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}

preorder1(bt);
console.log('-----------------------')
preorder2(bt);
