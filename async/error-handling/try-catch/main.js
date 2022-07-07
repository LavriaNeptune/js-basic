try {
  console.log('step1');
  hahaha; // 此处为变量未定义错误
  console.log('step2');
} catch (error) {
  console.log('catch!');
} finally {
  console.log('finally');
}
// 可能出现问题的代码 -> 放置在 try 块中
// 处理错误的代码放在 catch 中，catch 传入的参数为抛出的错误对象

// output：
// step1 正常执行
// catch! 出错后程序流转移到 catch 块中
// finally 无论如何都执行 finally 块中的代码
