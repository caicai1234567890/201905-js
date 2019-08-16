

// 1. 导入模块 
let http = require('http');
let url = require('url'); // url 解析客户端请求的url 
let fs = require('fs');
let mime = require('mime'); // 第三方模块,需要用npm 或者yarn安装

// 2. 创建服务
let server = http.createServer((req,res)=>{
    // 2.1 解析客户端的请求的url 
    let urlObj = url.parse(req.url,true);
    // urlObj.query一直都有,parse的是否第二个参数为true,将会得到一个对象,如果不传会得到一个形如key1=value&key2=value2字符串
    console.log(urlObj);
    // 2.2 要获取请求的路径和url问号传参
    let { pathname, query } = urlObj;

    // 2.3 处理静态资源服务(响应html,css,js,图片等文件的服务)
    // console.log(__dirname);
    if(pathname === '/' || /(\.\w+)/.test(pathname)){
        // 条件表示: 客户请求的pathname是/或者pathname中带有扩展名 
        let filePath = '';
        let contentType = '';
        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        }else{
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname);
            // console.log(contentType);

        }
        res.setHeader('Content-Type',contentType);
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.statusCode = 404;
                res.end('NOT FOUND');
            }else{
                res.end(data);
            }
        });

    }else{
        // 这个else都是处理的ajax接口
        // ajax 接口对于服务端也是pathname ,只不过服务端响应这个pathname不再返回静态资源的文件了,而是根据客户端传递的参数返回客户端需要的内容

        // 这个接口根据返回指定id的用户
        res.setHeader('Content-Type','application/json;charset=UTF-8');
        if(pathname === '/api/getUser'){
            let d = {
                code : 0,
                data : null,
                msg : 'ok'
            }; // 初始化数据解构
            // 获取客户端传递过来的id
            let id = query ; //从query中结构id 
            if(id){
                let con = JSON.parse(fs.readFileSync('./user.json','utf8'));
                let userById = con.find(item => +item.id === +id);
                if(userById){
                    d.data = userById;
                    res.end(JSON.stringify(d));
                }else{
                    d.code = -1;
                    d.msg = '用户不存在';
                    res.end(JSON.stringify(d));
                }
            }else{
                // id没有解构到
                d.code = 1;
                d.msg = 'id 没有传';
                res.end(JSON.stringify(d));
            }
        }
        // if(pathname )
    }
});
server.listen(8000,()=>{
    console.log('on');
});


/* 
1. 进入到这个项目目录中
2. 用node启动server : node 服务脚本名
3. 进入浏览器访问localhost:端口号

!! 不要用go live 


*/