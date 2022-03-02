const stack = [];
// 入栈
stack.push(1);
stack.push(2);
// 出栈
const item1 = stack.pop();
const item2 = stack.pop();
/* 
  打完断点后，按 F5 打开调试页面
  - 继续（Continue）：程序将会运行到下一个断点处，如果程序只有一个断点，将会执行到结束；
  - 单步跳过（Step Over）：一行一行向下执行代码；
  - 单步调试（Step Into）：如果调用函数，进入到函数能调用代码；
  - 单步跳出（Step Out）：跳出函数调试；
  - 重启（Restart）：重新调试一遍；
  - 停止（Stop）：停止当前调试。 
*/
