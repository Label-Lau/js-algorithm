const bt = require('../tree（树）/bt')

const preorderTraversal = (root) => {
  const res = []
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    res.push(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
  return res
}

console.log(preorderTraversal(bt))
