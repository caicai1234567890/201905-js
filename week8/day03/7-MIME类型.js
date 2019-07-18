

// 什么是MIME 
// MIME: 每种文件都有自己的MIME类型,这个MIME类型就是服务端响应的时候要设置的Content-Type

// MiME 依赖包是一个第三方的模块,其中包含了绝大多数的文件的MIME类型
// 使用第三方的依赖包:
// 1. 安装MIME : yarn add mime --save
// 2. 引用第三方的模块 
let mime = require('mime');
let http = require('http');
let url = require('url');
let fs = require('fs');

// 1. 创建一个服务
let server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','')
    // 1.解析url
    let urlObj = url.parse(req.url,true);
    let { pathname } = urlObj;

    // 使用mime设置内容类型, mime.getType(pathname)
    // getType方法会返回pathname 对应的内容类型
   

    let filePath = '';
    if(pathname === '/'){
        filePath = __dirname + '/index.html' ;
        res.setHeader('Content-Type','text/html');
        // mime.getType()并不能处理斜杠,必须单独设置
    }else{
        filePath = __dirname + pathname ;
        res.setHeader('Content-Type',mime.getType(pathname));
    }

    // console.log(filePath);
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.end('NOT FOUND');
        }else{
            res.setHeader('set-cookie','name=lisi;path=/;')
            // 服务端设置cookie,在响应头设置set-cookie 响应头
            res.end(data);
        }
    });
});

// 监听端口号 
server.listen(8000,()=>{
    console.log('800 is on');
});


