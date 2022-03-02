# JS 数据结构与算法

## 1. 栈（stack）

### 栈是什么？

- 一个先进后出的数据结构；
- Javascript 中没有栈，但可以用 Array 实现栈的所有功能

<img src=".\img\Snipaste_2022-02-13_15-55-10.png" style="zoom:50%;" />

> VS Code打断点调试代码

打完断点后，按 F5 打开调试页面

![](.\img\Snipaste_2022-02-13_15-22-44.png) 从左至右功能依次是：

- 继续（Continue）：程序将会运行到下一个断点处，如果程序只有一个断点，将会执行到结束；
- 单步跳过（Step Over）：一行一行向下执行代码；
- 单步调试（Step Into）：如果调用函数，进入到函数能调用代码；
- 单步跳出（Step Out）：跳出函数调试；
- 重启（Restart）：重新调试一遍；
- 停止（Stop）：停止当前调试。

### 栈的应用场景

- 需要先进后出的场景。
- 比如：十进制转二进制、判断字符串的括号是否有效、函数调用堆栈......

#### 场景一：十进制转二进制

<img src=".\img\Snipaste_2022-02-13_15-54-17.png" style="zoom:50%;" />

- 后出来的余数反而要排到前面；
- 把余数一次入栈，然后再出栈，就可以实现余数的倒序输出。

#### 场景二：有效的括号

<img src=".\img\Snipaste_2022-02-13_16-00-16.png" style="zoom:50%;" />

- 越靠后的左括号，对应的右括号越靠前。
- 左括号入栈，右括号出栈，最后栈空了就是合法的

#### 场景三：函数调用堆栈

```javascript
function greeting() {
  // [1] Some codes here
  sayHi();
  // [2] Some codes here
}
function sayHi() {
  return "Hi";
}

// 调用 greeting 函数
greeting();

// [3] Some codes here
```

- 最后调用的函数，最先执行完；
- JS 解释器使用栈来控制函数的调用顺序。



### 栈的应用场景

LeetCode：20 

