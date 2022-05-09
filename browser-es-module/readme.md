# 要点速记
<!-- type="module" 才可以使用es模块化 -->
<script type="module" src="./index.js"></script>

<!-- 原始值在模块外为只读 -->
myAge ++;  // 报错

<!-- 对象内成员可以在模块外读写 -->
obj.num ++;

<!-- 一些写法 -->
export {
    name as fooName,  // 这种写法可以重命名
    age as default,   // 可以添加默认导出
}

<!-- 可以直接将导入的内容进行统一导出 -->
export { default as myAge, fooName, add, obj, log, logObjNum } from './module.js'

<!-- 通过browser-sync监听文件变化并自动刷新页面 -->
npm i -g browser-sync
browser-sync start --server --files '*'w