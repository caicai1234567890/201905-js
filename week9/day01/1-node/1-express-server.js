

// express 是nodejs的框架,用于快速开发服务端程序,让服务端代码组织起来更清晰
// 1.安装 express : npm intall express --save 
// 2. 导入express 
let express = require('express');
let bodyParser = require('body-parser'); // 用来解析post请求传递数据的中间件
// 3. 创建服务
let app = express();

// 4. 提供静态资源服务
app.use(express.static(__dirname)); // 使用静态资源中间件. express.static(__dirname) 静态资源服务中间件
app.use(bodyParser.json()); // 使用body-parser中间件处理post的数据,处理完挂载在req.body上

// 5.处理ajax接口,根据不同的pathname做出不同的处理,这种机制叫做路由
app.get('/api/login', (req, res) => {
    // req是请求对象
    // res是响应对象
    // 这个req和res是经过express包装过的对象,和原生的req和res不太一样
    console.log(req.query);
    // req.query 是get请求问号传参的对象
    // req.headers 请求头信息
    console.log(req.path); // 请求的路径
    console.log(req.host); // 主机名(域名)
    res.send({
        code: 0,
        data: { a: 1 },
        msg: 'ok'
    });
});

app.post('/api/testPost', (req, res) => {
    console.log(req.body); // 使用body-parser中间件之后通过req.body获取post数据
    res.send({
        code: 0,
        data: { post: true },
        msg: 'ok'
    })
});

// 动态路由 : 接口中有一部分不再是死的了,带有:的就是动态的,将来这一部分是由客户端传递的
app.get('/order/details/:orderId', (req, res) => {
    // console.log(req.params); // req.params是动态路由的值,是一个对象,对象中的属性是动态路由冒号后面的 {orderId : 具体的值} 值是客户端请求的时候传递的值,例如客户端请求: /order/details/123 req.params就是{orderId : 123}
    // 作用: 简化url,客户端不用再问号传参了
    console.log(3);
    res.send({
        code: 0,
        data: req.params,
        msg: 'ok'
    })
});

// app.param() 方法:拦截带有指定动态路由的请求 ,拦截一般都是对动态路由做校验,如果校验通过要执行next()放行,否则客户端的请求一直处于挂起的状态,如果校验失败,我们可以通过res.send()提前结束响应
app.param('orderId', (req, res, next) => {
    // console.log(req.params);
    if (/^(\d+)$/.test(req.params.orderId)) {
        next(); // 拦截之后要执行next()
    } else {
        res.send({
            code: 1,
            data: req.params,
            msg: 'err'
        });
    }


});

// 中间件 middleware 
// 一个在请求之后,响应之前被调用的函数,中间间可以访问请求对象和响应对象,一般都是有某些固定功能,如express服务中间件,或者使用中间件做某些拦截,比如登录状态的拦截,或者权限的拦截
// 使用中间件用app.use() 使用中间件的方法
app.use(function (req, res, next) {
    // req是请求对象,可以向req上扩展东西
    // res响应对象
    // next 交出控制权,把请求交给下一个中间件或者交给真正响应这个请求的参数
    console.log(1);
    req.now = '该下课le'; // 在前面的中间件扩展内容,后面的中间件也可以获取这个属性 
    next(); // next() 把请求交给下一个中间件,或者真正响应这个请求的程序,如果不next,请求一直处于被挂起的状态
});
app.use(function (req, res, next) {
    console.log(2);
    res.send(); // 在中间件可以提前结束响应
});
app.listen(8000, () => {
    console.log('port 8000 is on');
})