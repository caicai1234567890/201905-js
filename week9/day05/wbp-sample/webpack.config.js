
// 真实项目中，我们采用webpack配置文件的方式来配置webpack打包的具体行为

// 1.在项目的根目录下面新建一个webpack.config.js文件，webpack运行的时候会自动加载这个文件，然后按照这个文件中的配置打包

// 学习webpack就是学习webpack配置文件的编写，webpack需要基于CommonJS风格导出一个配置对象

module.exports = {
    // 所有的配置写在对象中
    entry : __dirname + '/app/main.js' , // entry入口 是webpack打包的起点，从这个文件开始查找依赖关系
    output: {
        path : __dirname + '/public',  // 打包后文件输出的路径
        filename : 'bundle.js'  //打包后输出的文件名
    },  // output 是webpack打包以后输出的文件路径和文件名
    devtool: 'eval-source-map', //生成sourcemap
    devServer: {
        // 配置 webpack-dev-server 
        contentBase: './public',
        historyApiFallback: true, // 单页面路由切换时不跳转页面 很重要
        inline : true , // 实时刷新当文件变化的时候浏览器刷新
        proxy: {
            '/api' : {
                // 当dev-server检测到接口中包含/api,它会帮你代理这个请求
                target: 'http://localhost:8001' , // 目标域，dev-server 会把带有/api接口的请求全部代理到target指向的域
                changeOrigin : true , // 当target是一个域名的时候需要配置此项
                secure:false ,  // 设置支持https的协议，不检验安全与否
                port : 8080  // dev-server 启动端口号
            }
        },
        module: {
            rules: [
                {
                    // 这一条就是一个规则
                    // 配置 Bebel
                    test: /\.(jsx|js)$/, // 告知loader要处理的文件扩展名的规则
                    use:{
                        // use是使用什么loader
                        loader: "babel-loader",
                        options: {
                            presets:['env','react']
                        }
                    },
                    exclude: /node-modules/  // 告诉loader哪些文件夹里面的东西不需要处理
                },
                {
                    // 配置css Loader
                    test : /\.css$/,
                    use : [
                        {
                            loader: 'style-loader',

                        },
                        {
                            loader:'css-loader'
                        }
                    ],
                },
                {
                    // less loader
                    test : /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                }
            ]
        }
        
    }
}