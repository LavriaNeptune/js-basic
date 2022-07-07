// 生成器(generator)实际上就是迭代器的一种更高级的语法表现形式

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
// function* 是特殊的语法格式 -> generator function
// 声明一个名为 generateSequence 的生成器函数

let generator = generateSequence();
//不执行函数体内容，返回一个生成器对象的特殊对象来管理执行流程

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// 生成器要与 next 方法搭配使用，每次使用 next 都会执行一步 yield <value> 语句，并返回一个对象，其中 value 属性是 yield 语句的值，done 属性是一个布尔值，表示是否已经执行完毕。
