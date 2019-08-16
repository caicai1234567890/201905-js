// 静态资源 : js, html,css图片等
// 当客户端请求静态资源文件时,提供响应这些请求的服务叫做静态资源服务

// 1. 导入模块

let http = require('http');
url = require('url'),
{ readFile } = require('fs'),
mime = require('mime'); // 第三方的依赖,需要安装 
// 如果项目中没有package.json,安装之前首先初始化项目目录, npm init -y 
//  如果有package.json,直接安装依赖
// 安装依赖 npm install 依赖 参数 或者 yarn add 依赖 参数
// 如果用npm 安装依赖报错尝试用yarn安装,如果用yarn安装报错,尝试用npm安装
// npm cache clean --force 如果安装报错先清缓存

// 1.创建一个服务
let server = http.createServer((req,res)=> {
    // 1.1 解析url 
    let { pathname } = url.parse(req.url,true);
    // true 表示把查询字符串变成对象并且挂载在query属性上,通过urlObj.query.属性名获取某个问号传参的值
    // 1.2 获取url的请求路径,根据客户端的请求路径不同返回不同的文件,如果路径是/返回index.html
    let pathFile = ''; //记录真实的请求文件路径
    if( pathname === '/'){
        pathFile = __dirname + '/index.html';
        res.setHeader('Content-Type','text/html');
    }else{
        pathFile = __dirname + pathname;
        res.setHeader('Content-Type',mime.getType(pathname));
    };
    readFile(pathFile,( err,data )=>{
        if(err){
            res.statusCode = 404 ;
            res.setHeader('Content-Type','text/plain;charset=UTF-8');
            res.end('path is not found');
        }else{
            res.end(data);
        }
    });
});

server.listen(8000,()=>{
    console.log('server is on');
});
// 当前脚本文件(js文件,server)所在的目录就是根目录.即 / 
