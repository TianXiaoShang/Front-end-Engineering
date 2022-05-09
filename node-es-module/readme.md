# 要点速记
<!-- node中直接使用esModule需要后缀名为.mjs，在package.json中配置"type": "module"后可以直接写.js，同时commonjs的模块要用.cjs -->
<!-- node index.js会报错，因为无法直接使用esModule模块话，需要命令 nodemon --experimental-modules index.js才能识别模块化 -->
<!-- 这里的nodemon可以npm i -g nodemon下载，可以实时监听文件变化去自动执行 -->
<!-- esModule中可以直接import导入commonjs，但commonjs无法导入esModule模块 -->


<!-- npx可直接运行node_modules/bin下的命令，如下两个命令等价 -->
"scripts": {
    "babel": "babel-node"
},
npm run babel index.js
npx babel-node index.js


<!-- 对于低版本的node，需要babel进行转译，使用到了如下三个包：npm i @babel/node @babel/core @babel/preset-env --dev -->
<!-- 其中@babel/preset-env是各个babel插件的集合，需通过命令使用该插件去编译指定文件，直接在.babelrc文件配置"presets": ["@babel/preset-env"]，则无需在命令指定插件 -->
"@babel/core": "^7.17.10",
"@babel/node": "^7.17.10",
"@babel/preset-env": "^7.17.10"


<!-- es module中无法访问require、module、exports、__filename、__dirname，其中前三者就是对应的import export default，后俩个可以使用一下代替 -->
import { fileURLToPath } from 'url'
import { dirname } from 'path';
<!-- // 获取当前文件路径 -->
const __filename = fileURLToPath(import.meta.url);
<!-- // 获取文件路径的所在文件夹路径 -->
const __dirname = dirname(__filename);
console.log(__filename, __dirname, 222)