

// 写一个服务,既可以处理静态资源文件请求,又可以响应ajax请求
// 根据pathname不同响应不同的内容
// 静态资源文件请求的pathname: /(index.html),xxx.css,xxx.js,xxx.png...,静态资源文件请求的pathname除了/以外,都带又扩展名

// ajax请求的pathname: /home/help/search ;而ajax接口是不带扩展名的

let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 1. 创建一个服务
let server = http.createServer((req,res)=>{
    let urlObj = url.parse(req.url,true);
    let { pathname,query } = urlObj;
    // 从urlObj中获取pathname 和 query(客户端get请求时传递的问号传参,经过url模块解析后形成的一个对象)
    // 判断请求是静态资源请求还是动态的ajax请求
    // 如果是静态资源文件请求pathname会是带有扩展名.xxx或者pathname是/ 
    if( pathname === '/' || /(\.\w+)$/.test(pathname)){
        // 如果满足这个条件说名请求的是静态资源文件
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
                res.end('NOT FOUNd');
            }else{
                res.end(data);
            }
        });
    }else{
        // else的情况就是ajax请求
        // 根据不同的接口返回不同的内容,即pathname不同做不同的操作,这种机制叫做路由
        // 因为ajax没有特殊情况返回的都是json,所以在这里设置
        res.setHeader('Content-Type','application/json;charset=UTF-8');
        if(pathname === '/api/getBanner'){
            // console.log('ddd');
            // console.log(query);
            let { id } = query; 
            // 从query中获取客户端传过来的id,如果获取不到id,则id为undefined 
            if(id){
                // 如果id存在
                let con = fs.readFileSync(__dirname + '/banner.json','utf8');
                // 读取回来的结果是字符串
                let dataArr = JSON.parse(con);
                let itemByID = dataArr.find(item => +item.id === +id);
                // 传过来的id是string类型的,而数组项中的ID是number类型的,需要数据转化

                // find的结果有可能不存在不存在的时候是undefined
                if(itemByID){
                 let d = {};
                 res.end(JSON.stringify(d));  
                }
                // res.end()只能传字符串
            }else{
                // 如果id不存在
            }
        }
    }

    // 登录接口:根据用户post过来的数据去和数据库中的数据做比对,首先获取客户端传递的数据中的用户名和密码,然后从数据库中查找和传递过来用户名一样的数据,如果找到用户名需要对比密码是否相同,用户名和密码都相同才算是登录成功,其他情况都是登录失败
    if(pathname === '/api/login'){
        // POST请求方式
        // 1. 构造约定的数据结构默认成功的数据
        let d3 = {
            code : 0,
            data:null,
            msg:'ok'
        };
        // 2.获取客户端post过来的数据;因为post请求传递的数据比较大,客户端会切片,一片一片的传递而服务器也是一片一片的接收,所以node js是靠两个事件来接收post数据
        let dataStr = '';
        req.on('data',(chunk)=>{
            // 服务端在接收客户端post过来的数据的时候每接收一次会触发一次data事件,触发一次data事件就会执行这个回调函数
            // console.log(chunk);
            dataStr += chunk;
        });
        req.on('end',()=>{
            // 在服务端接收post数据结束后会触发end事件,就会执行这个回调
            console.log('完了');
            console.log(dataStr);
            // dataStr 已经拿到全部客户端传递过来的数据,但是是一个字符串类型的,需要转化成对象
            let dataObj = JSON.parse(dataStr);
            // 根据dataObj中的用户名先去数据库中查找
            let conUser = fs.readFileSync('./user.json','utf8');
            let conUserAry = JSON.parse(conUser);
            let user = conUserAry.find(item => item.name === dataObj.username);
            // 根据用户名查询的结果有可能不存在,所以需要判断
            if(user){
                // 说明库里面有这个用户名,但是仍然需要比对密码
                if(user.pwd === dataObj.pwd){
                    res.end(JSON.stringify(d3));
                }else{
                    d3.code = 1;
                    d3.msg = '用户名或密码错误';
                    res.end(JSON.stringify(d3));
                }
            }else{
                // 说明库里面没有这个用户
                d3.code = -1;
                d3.msg = `${dataObj.username}不存在,请前往注册`;
                console.log(d3);
                res.end(JSON.stringify(d3));
            }
        })

    }
    
});

// 2. 监听端口号
server.listen(8000,()=>{
    console.log('port is on');
});