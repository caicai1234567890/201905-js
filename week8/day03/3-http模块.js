// 前端: 
// 发起请求,获取数据,拿到数据后渲染到页面中
// 后端(服务端):响应请求发送数据

// 前后端通过http协议通信,前端通过http发送请求获取数据,服务端处理http请求,通过http协议向客户端发送数据
// http 模块: http模块是node js 的内置模块,是用来处理客户端的http请求的

// 
let http = require('http');
let fs = require('fs');
// 1.要处理客户端的http请求,首先要创建一个服务
// http.createServer()创建一个服务
let server = http.createServer((request,response)=>{
    // 具体处理http请求的代码要写在这个回调函数中
    // request 请求对象,这个对象中包含了客户端的请求中的所有的信息
    // response 响应对象,这个对象中包含了所有用来响应客户端时所需要的方法和属性;
    console.log('请求来了');
    // 这个回调函数只要客户端发送一个请求,这个回调函数就会执行一次

    // 把index.html响应给客户端
    // 首先需要把index.html读取出来 -> 将读取的结果做为响应的内容发送给客户端
    fs.readFile(__dirname + '/index.html',(err,data)=>{
        if(err){
            response.end('读取失败');
        }else{
            response.end(data);
            // 向客户端发送响应数据在发送响应之后断开连接
        }
    });
//   我们在客户端响应客户端请求的时候,没有客户端判断请求的是什么 ,当客户端收到index.html以后会解析html,在解析的时候遇到script标签,而script会再次向服务器发送请求,再请求的时候我们又响应了一次index.html,所以js会报错
});

// 2. 服务端的程序需要监听一个端口号(练习不要使用3000以下的端口)
// 端口号的范围 0 - 65535 
// server.listen(端口号,监听端口成功执行的回调)
server.listen(8000,()=>{
    console.log('port 8000 is on');
});
// 一个端口只能供一个服务监听,当前8000端口被server占用了,其他的服务就不能再用8000端口了

// 写完脚本之后,还需要在命令行里面启动这个服务,node + 文件名
// 接下来区浏览器localhost:8000/ 
// 为什么用localhost ? 因为正常的请求是访问url ,然后DNS负责把url解析成ip地址,然后请求ip地址,但是服务运行在自己的本地,本地ip 127.0.0.1 而127.0.0.1就是localhost 

// 此时电脑上既运行着客户端又运行着服务端,浏览器是客户端,用node启动的js脚本是服务端.


