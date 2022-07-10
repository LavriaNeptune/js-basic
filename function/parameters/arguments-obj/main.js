let arr = [1, 2, 3];
// 只要是可迭代对象都可以使用 spread 语法！一般这个可迭代对象是数组
function foo(a, b) {
  console.log(arguments);
}

foo(...arr); // [Arguments] { '0': 1, '1': 2, '2': 3 } arguments 对象记录了传入传入函数的所有参数，哪怕是没有匹配到形参的参数。
