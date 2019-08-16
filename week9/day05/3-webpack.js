
// webpack 是基于Node.js 的静态资源模块,它可以根据一个起点查找各个模块之间的依赖关系,根据这些依赖关系把模块达成一个或者多个包

// 为什么使用webpack 
// 1. webpack对模块化的支持很强大,我们可以借助webpack开发
// 2.可以帮我们处理less,Sass 等css预处理语言
// 3. 把基于JS的扩展语言，入TS处理成JS
// 4.配置代理解决开发环境的跨域问题

// 全局安装 安装webpck 
// 1. webpack-cli : npm install webpack-cli -g
// 2. webpack: npm install webpack -g
// webpack-cli --entry ./app/main.js --output ./public/bundle.js
// --entry 指定入口文件
// --output 指定打包后输出的文件路径和文件名
// 这句的命令： 从 ./app/main.js 为入口开始打包，最后把打包后的文件输出到 ./public/bundle.js中

// 配置npm scripts 
// 在package.json scripts 下面的start比较特殊，直接执行 npm start 不需要写run  
// 一般的配置需要npm run + 名字属性 

// source-map 
// 代码打包之后，代码的可读性变得黑欸长差，不利于调试，而浏览器有一种叫做source-map的机制，可以根据我们提供的source map 把打包以后的代码虚拟还原成打包之前的样子，方便开发调试

// webpack可以自动生成source-map,配置即可
// source-map有很多种，source map越详细，打包的速度就会越慢
// 虚拟的js和打包前的js一样可以打断点

// webpack-dev-server 
// webpack 可以启动一个本地服务，主要有以下功能： 
// 1.静态资源服务
// 2. 让浏览器能够监听文件的变化，如果文件变化页面自动刷新
// 3. 可以代理客户端的请求，实现开发环境跨域
// 使用前安装webpack-dev-server 

// loader: 帮助webpack处理非js的文件，webpack原则只处理js,处理其他文件就需要loaders 
// webpack 中一切皆模块，都可以import,不是js就需要loader

// babel-loader(ES6/7 转 ES5 或者JSX 转 JS)
// css-loader style-loader(处理css文件)
// less-loader 处理less, 把less文件转成css
// url-loader  处理图片