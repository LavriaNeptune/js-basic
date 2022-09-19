const array = [1, 2, 3, 4, 5];

function reducer(pre, cur, curIn, arr) {
  // 后两个为可选参数
  const returns = pre + cur;
  console.log(
    `previous:${pre},current:${cur},index:${curIn},arr:${arr},returns:${returns}`,
  );
  return returns;
  // 返回值作为下次迭代的 pre
}

array.reduce(reducer);
// array.reduce(reducer, initialValue); 带有 初始值 时,初始值作为 pre 使用;否则将 pre 设置为数组的第一个值...
