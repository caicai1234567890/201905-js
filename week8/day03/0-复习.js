/* 
NodeJS
Node.JS不是一门新的语言,而是一个让js能够在服务端的环境中运行

模块化: 比如b.js需要 a.js中的方法或者某些信息时,在客户端我们需要先于b.js通过script标签引入a.js,但是在nodeJs中没有html,所以需要把a做出模块把b需要的信息导出,在b.js中导入a.js;

导出: 
1. module.exports = fn 直接导出一个函数
2. exports.fn = fn ; 导出一个对象,对象中有一个属性fn 
3.导出一个对象 
module.exports = {
    fn,
    gn
}

导入 : 导入时需要用变量接收导入的结果,通过这个变量使用导入的信息 
导入js 和json文件可以不写扩展名
let obj = require('./a');

npm 包管理器 
第三方模块称为依赖包,npm专门用来管理这些依赖包的,依赖包分为开发依赖(devDependencies)和生产依赖(dependencies)
1. npm init -y  初始化项目生成一个package.json文件
2. npm install 依赖包的名称 参数
2.1 参数为空或者-save 安装生产依赖(代码在运行的时候需要的依赖)
2.2 参数为-save-dev 安装开发依赖
2.3 -g全局安装(全局安装就时安装成cmd的一个命令)

npm install 或者 npm i 安装package.json 或者 devDependencies 和 dependencies 的依赖包

npm uninstall 依赖包的名称 卸载依赖包

项目的路径中尽量不要有中文,而且文件夹也不要叫node,npm,node_modules名字

清npm缓存(当安装依赖包失败的时候先清缓存)
npm cache clean --force

Node.js的模块: 
1. 内置模块: node js中在安装时已经存在模块,这些模块都是核心的模块,例如fs , http , url 模块等,直接导入
2. 自定义模块 : 自己写的模块
3. 第三方的模块: 通过npm 或者yarn安装的第三方模块

无论是哪种模块在使用前都需要导入
CommonJS



*/