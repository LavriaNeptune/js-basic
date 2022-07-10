let arr = [1, 2, 3];
// 只要是可迭代对象都可以使用 spread 语法！一般这个可迭代对象是数组
function foo(a, b) {
  console.log('参数:', a, b);
}

foo(...arr); // > 1 2

// 扩展语法的拷贝能力
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
console.log(objCopy);
console.log(objCopy === obj); // false -> 扩展语法是浅层的深拷贝
