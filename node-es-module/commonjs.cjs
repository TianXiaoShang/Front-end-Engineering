// module.exports = {
//     commonjsFoo: 'commonjs exports value'
// }
// 等价的
const path = require('path');
console.log(__dirname, path.join(__dirname, 'foo'), 88)
exports.commonjsFoo = 'commonjs exports value';

// 全局对象,在commonjs中可以访问
// console.log(require)
// console.log(module)
// console.log(exports)
// console.log(__filename)
// console.log(__dirname)

