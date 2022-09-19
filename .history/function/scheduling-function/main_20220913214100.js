// 函数将在推迟若干时间之后执行,这种函数成为调度函数。
let timerId = setTimeout(() => {
  // setTimeout 会在指定的毫秒数之后执行函数。 -> setInterval 间隔设定时间反复执行函数
  console.log('Hi');
}, 1000);

clearTimeout(timerId); // 清除定时,在执行函数前清楚定时器,函数将不会执行