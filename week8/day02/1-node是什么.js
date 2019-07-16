

// nodejs是什么?
// nodejs不是一门新的语言而是一个可以让js运行在服务端的运行环境,nodejs基于v8引擎,在服务器上安装node.js以后,就可以用js开发服务端,所以js现在是全栈开发语言.

// 开发一个完整的项目，不仅需要前端还需要后端，前后端的代码都是保存在服务器上的，前端的代码运行在浏览器中，而后端的代码运行在服务器上的
// 前后端通过http协议通信，前端通过http协议把请求发送给服务器，服务器接收客户端的请求，准备客户端需要的数据，最后通过http协议把数据响应给客户端。

// 服务端要做的事情？
// 1. 能够存储前后端的代码（js,html,css,图片等文件）
// 2. 处理客户端的请求
// 3. 响应客户端的请求（把数据发送给客户端）
// 4. 服务器可以用来安装数据库保存数据

// 传统的服务端语言：
// java php c c++ python Golang .net 

// nodeJS的优势
// node JS可以写最新的技术，ES6， ES7任意用，没有兼容性问题
// 1. 单线程异步，事件驱动；
// 2. 事件驱动的非阻塞（I/O）,轻量高效；（采用异步的方式处理I/O 输入和输出）
// 3.npm是包管理器，npmjs.com是全球最大的node开源生态社区。
// 4. npm是伴随着node一起安装的，装完node,npm就自动安装了
// 5. npm包是别人做好的库和工具导入就可以使用了

// yarn也是node的包管理器，特点是速度快
// 转nrm: npm install nrm -g 
// nrm 用来切换源(从哪里下载) nrm ls
// nrm use taobao 切换到淘宝
// npm install nrm -g -> nrm ls -> nrm use taobao -> npm install yarn -g -> yarn add nrm -g 