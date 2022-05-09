import { foo, bar} from './module.js';
import fs from 'fs'
import _ from 'lodash'

// 可以在EsModule中载入commonjs的内容
import mod from './commonjs.cjs'

console.log(foo, bar, _.camelCase('Es Module'), mod.commonjsFoo, 111)

fs.writeFileSync('./foo.txt', 'es module working') 

// es module中无法访问
// console.log(require)
// console.log(module)
// console.log(exports)
// console.log(__filename)
// console.log(__dirname)

//以下方法代替
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取文件路径的所在文件夹路径
const __dirname = dirname(__filename);
console.log(__filename, __dirname, 222)