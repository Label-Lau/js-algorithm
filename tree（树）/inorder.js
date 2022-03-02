const bt = require("./bt.js");
/* 二叉树的中序遍历 */

/* 递归版 */
// 1. 对根节点的左子树进行中序遍历；
// 2. 访问根节点；
// 3. 对根节点的右子树进行中序遍历。

const inorder1 = (root) => {
  if (!root) return;
  inorder1(root.left);
  console.log(root.val);
  inorder1(root.right);
};

/* 非递归版 */
const inorder2 = (root) => {
  if (!root) return;
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
};

inorder1(bt);
console.log('------------------')
inorder2(bt);
