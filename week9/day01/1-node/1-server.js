
// 1.导入模块
let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');

// 2. 创建一个服务
let app = http.createServer((req,res)=>{
    // req 请求对象: req 中有所有的客户端请求的信息
    // res响应对象,提供属性和方法响应客户端请求
    let urlObj = url.parse(req.url,true);
    let { pathname , query } = urlObj;
    // 判断是静态资源还是动态ajax请求
    if(pathname === '/' || /(\.\w+)/.test(pathname)){
        // 静态资源
        let filePath = '';
        let contentType = '';
        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        }else{
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname);
        }
        res.setHeader('Content-Type',contentType);
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.statusCode = 404;
                let notFoundPage = fs.readFileSync(__dirname + '404.html','utf8');
                res.end(notFoundPage);
                // res.end('not found');
                // 项目如果请求内容404,还会返回一个漂亮的页面怎么做到的,当发现请求内容不存在的时候,不是直接返回'not found' 单词,而是去读取一个404的页面,把这个页面返回给客户端,客户端就会渲染成404页面
            }else{
                res.end(data);
            }
        });

    }else{
        // 动态资源
        if(pathname === '/api/getList'){
            let d = {
                code : 0,
                data : null,
                msg : 'ok'
            };
            // let { id } = query;
            let str = '';
            req.on('data',thunk => str += thunk);
            req.on('end',()=>{
                console.log(str);
            })
            res.end(JSON.stringify({
                code : 0,
                data : {
                    name : 'lisi' ,
                    age : 13
                },
                msg : 'ok'
            }));
   /*          if(id){
                fs.readFile(database,'utf8',(err,data)=>{
                    if(err){
        
                    }else{
                     let byId =  JSON.parse(data).find(item=> +item.id === +id);  
                     d.data = byId;
                     res.end(JSON.stringify(d));
                    }
                  });
            }else{
                res.end(data);
            } */
          

        }
    }
});
app.listen(8000,()=> console.log('port is on'));