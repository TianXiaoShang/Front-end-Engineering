// 手写一个loader
const {marked} = require('marked');

module.exports = source => {
    const html = marked(source)
    // // 方法一：返回一个模块导出。直接交给webpack处理 
    // // 要返回标准的js语句字符串，返回随意的字符串会报错，无法放入webpack打包的模块中去执行
    // return `module.exports = ${JSON.stringify(html)}`
    // return "console.log('hello loader')"

    // 方法二：也可以返回html，交给html-loader处理
    return html
} 