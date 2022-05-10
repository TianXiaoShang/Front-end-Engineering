// 配置文件遵循commonjs规范

const path = require('path')
module.exports = {
    mode: 'none',  // development / production / none 三种打包模式 
    entry: '/src/main.js',
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'output'),
        publicPath: 'output/'   // 这里不配也会自动去output下找
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            // {
            //     test: /.(png|jpg)$/,
            //     use: 'file-loader'   // 拷贝文件资源的形式
            // },
            {
                test: /.(png|jpg)$/,
                use: {
                    loader: 'url-loader',   // 通过url-loader使用base64打包图片
                    options: {
                        limit: 10 * 1024    // 超过该大小的图片自动交给file-loader处理（同样需要安装file-loader，不安装没办法交给file-loader处理）
                    }
                }
            },
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']   // 通过babrl-loader，使用@babel/preset-env进行js的语法降级
                    }
                }
            },
            {
                test: /.html$/,
                use: {
                    loader: 'html-loader',   // 打包html
                    options: {
                        sources: true
                    }
                }
            },
            {
                test: /.md$/,
                use: [
                    'html-loader', // 将markdown-loader返回的html字符串交给html-loader处理
                    './markdown-loader', // 通过路径指定手写的loader
                ]
            },
        ]
    }
}