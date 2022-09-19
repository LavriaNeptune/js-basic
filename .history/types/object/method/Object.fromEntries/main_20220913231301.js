// const entries = [
//   ['foo', 'bar'],
//   ['baz', 42],
// ];

const obj = Object.fromEntries(entries);
console.log(obj);

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);