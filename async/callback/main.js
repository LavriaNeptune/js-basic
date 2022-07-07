// 回调函数时这样的一种函数：函数作为另一个函数的参数被传递，并在需要使用它的时候进行调用。因为并不是立即调用该函数，而是在需要调用的时候再调用，故而称之为回调函数。

function plus(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}
function calc(x, y, callback) {
  return callback(x, y);
}
let num1 = 9,
  num2 = 6;

let result = calc(num1, num2, minus);
console.log(result); // 3
