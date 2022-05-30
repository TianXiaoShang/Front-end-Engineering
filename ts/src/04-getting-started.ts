// 定义对象

export {}
const foo: object = function () {};   // (小写的o)ts中的Object不是对象类型的意思，是泛指所有非原始类型，包括对象，数组，函数；

const obj : {foo: number} = {foo: 1};  // 应该具体的定义，类似对象字面量的语法。不过更专业的应该用接口定义