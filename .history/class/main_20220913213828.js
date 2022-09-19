class User {
  constructor(name) {
    this.name = name;
  }
  // 类中往往存在一个构造器 constructor
  sayHi() {
    console.log(`${this.name}:Hi!`);
  }
}
let user_001 = new User('Lavria');
// 创建类对象必须使用 new 关键字
user_001.sayHi(); // Lavria:Hi!