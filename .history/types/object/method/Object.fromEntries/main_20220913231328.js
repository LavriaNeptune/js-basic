// const entries = [
//   ['foo', 'bar'],
//   ['baz', 42],
// ];

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

// fromEntries

const obj = Object.fromEntries(entries);
console.log(obj);
