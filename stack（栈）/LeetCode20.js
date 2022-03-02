/* 解题思路 */

// - 对没有闭合的左括号而言，越靠后的左括号，对应的右括越靠前；
// - 满足先进后出，考虑用栈。

/* 解题步骤 */

// 1. 新建一个栈；
// 2. 扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法；
// 3. 最后栈空了就合法，否则不合法。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  // 新建一个栈
  const stack = [];
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    // 遇左括号入栈
    if (item === "(" || item === "[" || item === "{") {
      stack.push(item);
    } else {
      // 遇到和栈顶括号类型匹配的右括号就出栈
      const stackTop = stack[stack.length - 1];
      if (
        (stackTop === "(" && item === ")") ||
        (stackTop === "[" && item === "]") ||
        (stackTop === "{" && item === "}")
      ) {
        stack.pop();
      } else {
        // 类型不匹配直接判定为不合法
        return false;
      }
    }
  }
  // 最后栈空了就合法，否则不合法。
  return stack.length === 0;
};
console.log(isValid("({{}()}())"));
