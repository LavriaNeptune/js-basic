// const entries = [
//   ['foo', 'bar'],
//   ['baz', 42],
// ];

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

// fromEntries 可以将以 Array、Map 形式给出的 key、value 对转换为

const obj = Object.fromEntries(entries);
console.log(obj);
