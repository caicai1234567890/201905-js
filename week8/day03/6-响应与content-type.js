


// Content-Type:
// 服务端在响应客户端的请求的时候要设置响应内容的内容类型既content-type,当客户端收到服务端的响应内容后会按照content-Type解析响应的内容
// content-Type 是一个响应头 


let http = require('http');
let url = require('url');
let fs = require('fs');
let contentTypes = {
    html : 'text/html',
    css: 'text/css',
    js:'text/javascript',
    png : 'image/png'
}
// 1. 创建一个服务
let server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','')
    // 1.解析url
    let urlObj = url.parse(req.url,true);
    let { pathname } = urlObj;

    // 根据pathname 里面的拓展名判断到底内容类型是什么; .html-> text/html
    let extReg = /\.(\w+)/g;
    let types = extReg.exec(pathname)[1];
    // 正则捕获,如果捕获到返回数组,捕获不到返回null
    // console.log(types);
    if(types && contentTypes[types] ){
        res.setHeader('Content-Type',contentTypes[types]);
    }
    // res.setHeader(key,value)设置响应头信息,key和value都是字符串类型的

    let filePath = '';
    if(pathname === '/'){
        filePath = __dirname + '/index.html' ;
        res.setHeader('Content-Type',contentTypes.html);
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
