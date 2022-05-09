// import { default as myAge, fooName, add, obj, log, logObjNum } from './module.js'
import { myAge, fooName, add, obj, log, logObjNum } from './test.js'
const myName = fooName + '01'

console.log(myName, myAge, 1)
add();
log();
// 原始值在模块外为只读
// myAge ++;

// 对象内成员可以在模块外读写
obj.num ++;
logObjNum();
export default myName