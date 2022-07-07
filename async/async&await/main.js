async function foo() {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, 1000);
  });
  let decorateResult = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`❤️ ${result}❤️`);
    }, 500);
  });
  return decorateResult;
}
foo().then(console.log);

// 如果使用 then 来表示两个异步操作的顺序关系，看起来就有点复杂了...↓

// let stepOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Done');
//   }, 1000);
// });
// stepOne.then((result) => {
//   let stepTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`❤️ ${result}❤️`);
//     }, 500);
//   });
//   stepTwo.then(console.log);
// });
