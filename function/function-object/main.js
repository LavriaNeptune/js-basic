// 函数本质上也是对象,也具备属性
function sayHi() {
  console.log('Hi');

  sayHi.counter++; // 函数内部是可以访问函数名的
}
sayHi.counter = 0;

console.log(sayHi.name); // sayHi 函数的 name 属性用来记录函数名
console.log(sayHi.length); // 0 函数的 length 属性用来记录函数参数的个数
console.log(sayHi.counter); // 0 自定义函数属性

sayHi(); // Hi
sayHi(); // Hi

console.log(sayHi.counter); // 2 每次调用都会在 counter 属性上加 1
