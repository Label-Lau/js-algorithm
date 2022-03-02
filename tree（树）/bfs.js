const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

/*
  1. 新建一个队列，把根节点入队。
  2. 把队头出队并访问。
  3. 把队头的children挨个入队.
  4. 重复第二、三步，直到队列为空
*/

const bfs = (tree) => {
  const root = [tree];
  while (root.length) {
    const head = root.shift();
    console.log(head.val);
    head.children.forEach((child) => {
      root.push(child);
    });
  }
};

bfs(tree);
