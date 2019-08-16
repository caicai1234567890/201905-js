


// Node.js 是一个基于v8引擎让js运行在服务端的运行环境(runtime),用js开发

// Node.js模块化:解决了多个js的互相依赖(b.js要使用a.js文件中的方法或者属性)
// a.js中要把其他模块需要的方法或者导出
module.exports = fn; // 这样导出,直接导出的就是fn这个函数本身,如果导入a.js模块,得到的也是fn函数
exports.fn = fn; // 这样导出,直接导出的是一个对象,对象中有一个fn属性,如果导入a.js得到一个对象,需要对象.fn调用fn函数
module.exports.fn = fn; // 这样导出,导出也是一个对象
// b.js 导入,导入使用require方法


// 包管理器: npm / yarn 
// npm/yarn 用来管理依赖包: 用来记录项目中的依赖包有哪些(package.json)
// 安装依赖,卸载依赖
// 新建的项目(还没有安装依赖的项目),首先在项目中生成一个package.json文件

// 开发依赖: 只在开发的时候有用,大多数情况下都是一些工具性的东西, webpack ,devDependencies 
// 生产依赖:代码在运行的时候需要的东西就是生产依赖 dependencies(在package.json中)

// npm 安装开发和生产依赖 
// 开发依赖: npm install 依赖包 --save--dev
// 生产依赖 : npm install 依赖包 或者 npm install 依赖包 --save 

// node_modules文件夹 通过npm或者yarn安装的依赖都会安装在node_modules中

// 真实项目中,项目发版上线时并不会上传node_modules,到了服务器上之后,执行npm install 这个
// npm install 命令
// package.json中记录了哪些依赖, npm install 会把其中巨鹿的所有依赖安装
// npm uninstall 依赖包 卸载依赖

// yarn 
// 安装开发依赖 : yearn add 依赖包 --dev 
// 安装生产依赖: yarn add 依赖包 --save 
// 移除 yarn remove 依赖包
// 按照package.json安装 yarn 

// node.js内置模块 
// 1. http : 用来提供http服务的模块
// 1.1 http.createServer(callback);
// 2. fs : 文件读写模块 
// 2.1 fs.readFile(path,option,callback);异步读取
// 2.2 fs.readFileSYnc(path,option) 同步读取的内容,方法会返回读取的内容
// 2.3 fs.writeFile(path,data,option,callback);
// 2.4 fs.writeFileSync(path,data,option) 不管式同步写入还是异步写都是覆盖式的写入
// 2.5 fs.appendFile(path,data,option,callback) 异步追加写入文件
// 2.6 fs.appendFileSync(path,data,option) 同步追加内容

// 3. url : url解析请求的url 
// url.parse(req.url,true) 第二个参数传true表示把问号传参解析成对象
// let urlObj = url(req.url,true);
// urlObj.query 问号传参的对象挂在在这个上面
