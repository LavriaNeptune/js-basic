// 函数的参数是函数外部数据传入函数内部的一个“通道”

function foo(a, b) {
  console.log(a);
  console.log(b);
}
foo(1); // > 1 undefined
// 未赋值的参数默认设置为 undefined
foo(1, 2); // > 1 2
foo(1, 2, 3, 4, 5); // > 1 2
// 超出的参数会被忽略
