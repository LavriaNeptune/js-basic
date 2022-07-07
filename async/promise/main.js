// promise 对象是一个具备状态的对象，可以用来管理异步操作。

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});
// new 出来的 promise 对象将会立即执行内部代码，主动调用回调函数的 resolve 表示成功，reject 表示失败。传入回调函数的值可以是任意类型，但最好是可以被 JSON.stringify() 序列化的类型。

promise.then((result) => {
  console.log(result); // success
});
// 通过统一的 then 来获取异步结果，并加以处理。
