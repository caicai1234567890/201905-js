
// 服务端程序: 
//  1. 创建服务
//  2. 监听端口
//  3. 提供静态资源服务
//  4. 处理动态的ajax接口

// express 是Node.js的一个框架,可以用来快速的开发服务端引用程序
// express 可以让服务端的代码组织跟简单,更清晰

// express 是node 的第三方依赖,需要安装然后导入
// 1. 安装express npm express --save 
// npm install express --save 或者 yarn add express --save 

// 2.使用express , 导入express 
let express = require('express');
let bodyParser = require('body-parser');
 // express是第三方的依赖不用写路径
let fs = require('fs');
// 3. 创建服务
let app = express();

// 4.提供静态资源服务
app.use(express.static(__dirname));
// app.use() 是express使用中间件的方法,中间件可以理解成工具,使用这个工具可以让咱门的服务有了某些功能
//  express.static(路径(path))express 提供静态资源服务的中间件,path是一个路径指定静态资源文件保存的目录.
app.use(bodyParser.json()); // 使用body-parser 来解析post请求发送过来的参数, body-parser 解析完会在req上增加一个body属性,这个属性值存储了所有的post数据(body-parser只能解析json或者form表单数据,不能解析二进制文件流)

// 5.配置路由(写接口)

// 5.1 GET请求
app.get('/api/getUser',function(req,res){
    // req 和 res 是express 包装过的对象
    // req.query 是客户端get请求的参数,是一个对象数据类型的值
    console.log('/api/getUser 请求了');
    console.log(req.query);
    let d = {
        code : 0,
        data : null,
        msg : 'ok'
    };
    let con = JSON.parse(fs.readFileSync('./user.json','utf8'));
    let itemById = con.find(item => +item.id === +id);
    d.data = itemById ;
    res.send(d);
});

// 5.2 POST 请求
app.post('/api/register',function(req,res){
    // post 请求获取客户端post过来的数据要使用中间件 body-parser
    // 使用 body-parser: 
    //  1. 第三方的依赖,需要安装 npm install body-parser --save 
    //  2. 导入 
    // 3. app.use(中间件)
    // 4.通过req.body获取post的数据
    // console.log(req.body);
    let newUser = req.body;
    let users = JSON.parse(fs.readFileSync('./user.json','utf8'));
    // 为新用户添加id 
    newUser.id = users[users.length -1].id + 1;
    // 把newUser添加到users 中 
    users.push(newUser);
    // 写入user.json
    fs.writeFileSync('./user.json',JSON.stringify(users),'utf8');
    res.send({
        code : 0 ,
        data : null,
        msg : 'ok'
    });
    // res.send() 方法和原生end不同,send可以直接传对象,原生的只能传buffer或者字符串
});

// 5.3 无论post 和get 请求都会处理 
app.all('/abc/xyz',function(req,res,next){
    // 这个回调无论是get还是post 都会执行
});
// 监听端口 
app.listen(8000,()=>{
    console.log('port 8000 by express');
});
