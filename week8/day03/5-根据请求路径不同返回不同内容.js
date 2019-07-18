

// 根据请求的路径不同,返回不同的html
// 获取当前的请求路径,读取路径对应的html然后返回给客户端即可

let http = require('http');
let url = require('url');
let fs = require('fs');

// 1. 创建一个服务
let server = http.createServer((req,res)=>{
    // 1.解析url
    let urlObj = url.parse(req.url,true);
    let { pathname } = urlObj;
    // server启动时所在的路径就是根目录 /

    // /a.html -> 读取 /a.html 文件
    //  /b.html -> 读取 /b.html
    // 当我们访问localhost:8000的时候pathname是/,此时并没有叫/的html,所以读取就报错了
    // 加一个判断,判断pathname是不是/,如果是/,就要去读index.html
    let filePath = '';
    if(pathname === '/'){
        filePath = __dirname + '/index.html' ;
    }else{
        filePath = __dirname + pathname ;
    }
    // console.log(filePath);
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.end('NOT FOUND');
        }else{
            res.end(data);
        }
    });
});

// 监听端口号 
server.listen(8000,()=>{
    console.log('800 is on');
});

// 服务端响应入html,css,js,img等文件服务称为静态资源服务,html,css,js等文件称为静态资源.

//  如果pathname 是类似 /home/hemlp/search ,这种请求路径不是一个具体的文件,一般都是ajax接口,一般都是处理动态的请求,根据客户端传递的数据返回不同的内容
