


let HtmlWebpackPlugin = require('html-webpack-plugin'); // html-webpack-plugin是第三方的依赖,需要单独安装
module.exports = {
    entry : __dirname + '/app/main.js' , // webpack打包的起点,从这个起点查找依赖关系
    output : {
        path : __dirname + '/public' , // 指定打包以后文件的输出路径
        filename : 'bundle.js' // 打包后输出的文件名,后面如果有hash bundle[hash:5].js , 表示文件名后面跟5位的md5戳记,为了有别于上次打包的文件,如果被打包的文件没有发生变更,hash不变(hash是由文件内容计算出来的)
    },
    devtool : 'eval-source-map', // 浏览器的机制,可以把打包之后的文件虚拟还原成打包之前的样子,source-map 生成的越详细,打包的速度越慢
    devServer : {
        // webpack-dev-server 是webpack在开发中开启的本地服务
        contentBase : './public', // 启动服务器时加载页面的路径
        port : 8080 ,   // dev-server 启动时的端口
        inline : true , // 页面发生变化的时候自动刷新
        historyApiFallback: true, //SPA单页面应用的时候切换路由不刷新
        proxy:{
            // 代理 
            '/api' : {
                // api就是一个标识符,如果接口中板房/api就代理这个请求
                target: 'http://www.atouzi.com',
                changeOrigin: true, // 当target是一个域名的时候要设置
                secure : false // 不校验安全与否
            },
            '/order' :{
                target : 'http://localhost:8000//'
            }
        },

        // module 是用来配置loaders
        // loader 需要单独安装
        // babel-loader => babel-core babel-loader babel-preset-env babel-preset-react
        // css-loader => style-loader css-loader
        // less-loader => less-loader
        // url-loader => url-loader
        module:{
            rules:[
                {
                    test: /\.(jsx|js)$/,
                    use : {
                        loader: 'babel-loader',
                        options:{
                            presets:['env','react']
                        }
                    },
                    exclude: /node_modules/
                },
                {
                    test : /\.css$/,
                    use : ['style-loader','css-loader']
                },
                {
                    test: /\.less$/,
                    use: ['style-loader','css-loader','less-loader']
                },
                {
                    test : /\.(png|jpg|gif)/,
                    use :{
                        loader : 'url-loader'
                    }
                }
            ]
        },
        plugin:[
            new HtmlWebpackPlugin({
                template: __dirname + '/public/index.html' // 会按照这个模板生成html,并且把打包后的文件引进入
            })
        ]
    }
    
}