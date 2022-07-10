// 下面写一个具备缓存功能的装饰器

function double(x) {
  return x * 2;
}

function cachingDecorator(func) {
  // 这里使用了闭包保留了 传入的 func 以及 cache 变量...
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}
double = cachingDecorator(double);

// ↓ 此时以下的 double 均具备了缓存功能，但是原先所写的 double 都不需要更名，重运行即可拥有包装器所提供的缓存的功能... ↓

console.log(double(100));
