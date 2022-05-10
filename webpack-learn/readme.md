# 要点速记
<!-- npm i webpack webpack-cli -D进行webpack的安装 -->

<!-- npx webpack自动找src/index.js进行打包并默认放入dist中，同时打包过程会将inport/export转换，所以html中的script标签不需要type='module'进行使用 -->

<!-- 有npx webpack --mode development / production / none 三种打包模式,也可在webpack.config.js中通过mode字段进行配置 -->

<!-- "css-loader"负责把css打包成js模块，"style-loader"负责把css-loader转换的结果通过标签加载到页面上 -->