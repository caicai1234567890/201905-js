// 1. 配置开发环境, 安装react的脚手架 create-react-app
// npm install create-react-app -g

// 2.初始化react项目,在命令行中执行以下命令
// create-react-app 项目名,例如: create-react-app first-app

// 3.执行上面命令后会自动安装依赖,静等安装完成

// 4. cd 项目名字
// 5. npm start / yarn start 启动本地的开发服务器

// 项目目录结构:
// node_modules 依赖库
// public 下面有一个index.html,是webpack打包时需要的模板, index.html中里面有一个根DOM节点,除此之后这里面还会放一些公用的js,css文件
// src: 代码的源文件,我们写的代码一般都放在这里面
// src/index.js 是程序的主入口相当于vue的main.js, index.js 是webpack打包的起点,index.js负责把app.js 渲染到根DOM节点上, index.js 负责把app.js 渲染到页面中的真实DOM中
// src/App.js 相当于App.vue ,但是不太一样, App.js 是最后把组件组装到一起的地方

// React 的组成部分
// 1. react.js 是react的核心库
// 2. react-dom.js 提供了react与DOM相关的功能,常用的方法: ReactDOM.render() 这个方法可以把react元素(jsx元素)渲染到页面真实的DOM元素中


