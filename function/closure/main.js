let closure = (function () {
  var insideValue = 0;
  // 契合闭包使用的年代，使用 var 来声明变量

  return {
    addOne: function () {
      insideValue++;
    },
    showValue: function () {
      console.log(insideValue);
    },
  };
})();

closure.showValue(); // 0
closure.addOne();
closure.showValue(); // 1

// 无法从外部直接访问 insideValue 如果访问会报错 -> ReferenceError: insideValue is not defined PS：也无法修改内部方法！只能通过 closure 这个变量，依照规定好的方法，操纵隐藏的数据...
