

// 1. axios是一个基于promise的ajax库,用于客户端发送ajax请求

// 2. axios 安装
//  npm install axios --save 
// 因为ESModule实现不完全,浏览器不能直接使用ESModule语法
// CommonJS : 
// 导出 module.export.fn = fn  导入  require(模块)
// ESModule: 导出 export 导入inport 
// 所以需要我们使用script标签在使用之前引入到html中

// 3. 常用的axios方法

// 3.1 get请求 
// axios.get(utl?key=value&key2=value2)
// 返回promise实例,可以直接.then
/* axios.get('/data.json?key=1&name=lisi').then((res)=>{
    console.log(res);
    // res不是服务器返回的数据,而是一个经过包装后的对象
    // res.data 保存着服务器返回给我们的数据
    // res.status http 请求的状态码
    // res.statusText status对应的结果短语, 200 是ok 
}); */

// 或者: 直接把get请求的参数放在一个对象中
/* axios.get('/data.json',{
    params : {
        key1 : 'value1',
        name : 'lisi',
        age : 16
    }
}).then((res)=>{
    console.log(res);
}); */

// 3.2 post请求
// axios.post(url,data)
// url : 接口
//  data : 对象post的数据
// 返回promise实例,直接.then 

 axios.post('/data.json',{
    name : 'lisi',
    age : 18,
    title : '1qqq'
}).then((res)=>{
    console.log(res);
    // post请求的res也是包装过的,其中res.data才是服务端真正返回的数据
}); 

// 并发多个请求,这些请求结束之后再做处理
// axios.all([axios请求1,axios请求2...]);
// 返回promise实例,可以直接点then ,但是then方法中要传入一个axios.spread(callback)

/* axios.all([axios.get('/banner.json'),axios.get('/login.json')]).then(axios.spread((banner,login)=>{
    // spread回调的参数是有特点的; 
    // 第一个参数是数组all方法请求的结果,第二个是数组all方法请求来的结果
    // 以此类推...all方法数组中有多少请求,spread回调对应有多少参数
    console.log(banner,login);
}));
 */
