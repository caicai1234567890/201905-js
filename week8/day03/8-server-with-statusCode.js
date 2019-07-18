


// 当用于请求的路径不存在的时候,返回状态码404,并且返回not found 文字

let http = require('http');
let url = require('url');
let fs= require('fs');
let mime = require('mime');

// 1. 创建一个服务
let server = http.createServer((req,res)=>{
    // 1.1 解析url 
    let urlObj = url.parse(req.url,true);
    let { pathname } = urlObj;  // 获取当前请求的路径
    // fs.stat()方法验证路径是否存在
    // 如果路径不存在err就是一个对象,如果存在err就是null
    fs.stat(__dirname + pathname ,(err,stats)=>{
        if(err){
            // 如果代码运行到这里,说明err是个对象,即路径不存在
            // res.statusCode是一个http status的属性.通过修改这个属性,来设置http=status,404表示请求的资源不存在

            res.setHeader('Content-Type','text/plain;charset=UTF-8');
            res.statusCode = '404';
            res.end('NOT 戳!');
            // text/plain; 普通文本的内容类型
            // 返回汉字的是要设置编码
        }else{
            // 如果代码执行到这里说明路径有效,我们就需要返回对应内容
            let filePath = '';
            // 因为访问localhost:8000时pathname是/,需要做特殊的处理,此时需要返回index.html
            if( pathname==='/'){
                filePath = __dirname + 'index.html';
                res.setHeader('Content-Type','index/html');
            }else{
                filePath = __dirname + pathname;
                res.setHeader('Content-Type',mime.getType(pathname));
            }
          
            fs.readFile(filePath,(err,data)=>{
                if(err){
                    res.statusCode = 500;
                    res.end('internal error');
                }else{
                    res.end(data);
                }
            });


        }
    });

});

// 2. 监听端口
server.listen(8000,()=>{
    console.log('8000 is on');
});