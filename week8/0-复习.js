// 1. http协议: 超文本传输协议,前后端在传输数据时要遵守的规范,http协议用于前后端和服务端通信,整个通信过程分为两个阶段: 请求阶段, 响应阶段.

// 2.三次握手(建立连接)
//  2.1 客户端向服务端发送SYN码表示客户端请求连接
//  2.2 服务端收到SYN后向客户端发送ACK数据包,表示请求已经收到询问客户端是否建立连接
//  2.4 客户端发送ACK码数据包给服务端表示确认连接

// 3. 四次挥手(断开连接)
// 3.1 当客户端请求数据结束时,发送FIN码给服务端,告知服务端数据请求已经结束.
// 3.2 服务端收到FIN码之后,给客户端发送ACk码确认可以断开连接了,客户端收到ACK码之后就会断开传输数据通道
// 3.3 当服务端响应数据结束后,会发送FIN码给客户端告知客户端服务端的数据已经传输完成 .
// 3.4 客户端收到服务端发送的FIN码之后,会发送ACK码数据包给服务端表示客户端已经直到数据传输完成了,可以关闭数据通道了,服务端收到ACK码之后会断开数据传输通道 .

// 4. DNS解析 : 所有连接在互联网里面的设备都有一个ip地址,更擅长记忆url , 例如 www.baidu.com , DNS解析就是负责把url解析成ip地址

// 5. 在地址栏里面输入URL,到看到页面发生了什么

// [z请求阶段]
//  5.1 获取浏览器地址栏中的url,发送给DNS服务器
//  5.2 DNS服务器会把url解析成ip地址
//  5.3 把请求的数据发给DNS解析出来的ip地址 

// [响应阶段] (监听http端口号 http 80端口 https 443端口)
//  5.4 解析客户端的请求,准备响应的内容
// 5.5 设置content-type内容类型,每一种文件都有一个content-type,客户端会根据不同的内容类型把响应解析成不同的文件
// 5.6 把响应额内容发送给客户端 

// [渲染阶段]
// 1. 解析html,按照节点间的关系绘制成DOM树,解析的时候遇到link ,img,script,audio,video..的时候会再次发送http请求去请求对应的资源(link,img.,script,audio,video会让浏览器自动发送请求,这些请求都是get请求)
// 2. 把css文件绘制成css树 
// 3. 把DOM树和css树放在一起形成渲染树 
// 4. 把渲染树交给显卡绘制页面


// 6.HTTP报文 : http保温是前后端进行http通信时的信息载体
// 6.1 报文结构: 报文首部 空行 报文体
// 6.2 请求报文: 报文首部(请求行[请求方式,协议,版本],请求头) 空行 请求体
//  6.3 响应报文: 报文首部(状态行[协议,版本,响应状态码以及状态码短语],响应体) 空行 响应体

// 7.本地存储
// cookie localStorage sessionStorage 
// localStorage.setItem(key,value);key和value都是字符串类型
// 取 localStorage.getItem(key)获取不到返回null 
// 删除 localStorage.removeItem(key) 删除指定key的
// 全部删除 清空 localStorage.clear()

// document.cookie = 'key=value;path=/'
// document.cookie 返回的是一个字符串

// ls和cookie的区别 
// 1. ls属于h5新增的客户端的技术,cookie属于http协议的一部分,ls和cookie都是存在浏览器的
// 2.ls不能兼容ie低版本的,cookie属于http协议的一部分,所有能上网的都可以用cookie,所以兼容ie低版本
// 3. cookie会随着http协议传递,所以它的大小很有限,只能存少量的数据,ls存储的空间比较大,尽量不要向cookie中存东西,会占用http的带宽.
// 4. cookie可以设置过期时间,ls不能设置
// 如果要求ls有过期时间该怎么写?
// 设置一个定时器每隔一秒钟取看一下ls中的东西是否过去,如果过期了则清楚ls中储存的内容,一旦ls清空则需要把定时器清除 

// sessionStorage 和localStorage 的区别
// 1. sessionStorage 是会话存储,它的生命周期仅存在于整个会话,如果会话关闭了数据也就不存在了,localStorage是永久存储,用户不清除并且开发不用代码删数据会一直存在


// 8.ajax
// readyState 表示ajax状态的
// 0: 创建ajax实例成功,初始化成功
// 1: 已经调用open方法,打开这个url  
// 2: 已经获取到响应头
// 3: 正在接收响应体
// 4: 响应体已经接收完毕,整个ajax已经结束

// 9.http-method 请求方式 
// GET
// 1. 以问号传参的形式向服务器发送数据?key=value1&key2=value2
// 2. 一般用来获取数据,也可以向服务器发送少量的数据 
// 3. 因为url大小有限所以get请求能够传递的数据量也很小
// 4. url以明文的形式的传递参数,不太安全
// 5. GET请求容易产生缓存(在url末尾拼接一个时间戳或者随机数可以防止缓存,浏览器检测到url发生变化就会重新请求)

// POST 向数据传递数据
// 1. post把数据放在请求体中传递给服务端的(字符串类型的)
// 2. 数据放在请求体中大小不受限的;
// 3. 数据放在请求体中比较安全
// 4. Post请求不走缓存

// DELETE 
// PUT 
// OPTIONS
// PATCH
// TRACE
// HEAD

// Restful API
// 以http method为动词,表示请求的目的是什么,

// 10.http status code 响应状态码(网络请求是否成功)
// 2xx ：成功
// 200 ： ok  204 no-content
// 3xx : 重定向
// 301 ： Move permanently 
// 302 : move temporaly 
// 304 : not modified 
// 4xx : 错误
// 400 ： Bad Request 
// 401 : Unauthorised 
// 403 : forbidden 
// 404 : not found  请求的资源没有找到
// 5xx : 服务端错误
// 500 ： 服务器的内部错误
// 502 : Bad Gateway 网关错误

// 11. 同源策略和跨域
// 协议，域名，端口号都相同，否则就是跨域
// jsonp :
//  ngix :
// 服务端转化： 服务端将数据请求到转发到客户端
// cros : 目标域需要设置一个特殊的响应头 Access-Control-Allow-Origin,可以设置成具体的源，也可以设置成*表示在任意的源都可以访问 

// 12. Promise：用来管理异步的，创建Promise实例的时候回调函数是同步执行的，.then里面的回调函数是异步执行；
// Promise实例对象的三种状态： pending fulfiled rejected 
//  then方法中的回调执行的规律 ： 
//  第一个then 的哪个回调执行由创建promise实例时是resolve 执行还是reject执行，如果resolve则是第一个执行，如果reject则是第二个执行
// 后面的then哪个回调执行取决于前面的then执行，前面的then没有返回promise实例，还是第二个回调执行后面then的第一个会执行，但是如果前面报错了，then的第二个会执行
// 如果前面then回调返回promise实例，如果实例resolve了，后面then第一个回调执行，如果reject了，第二个回调执行

// 13.宏任务和微任务：都是异步任务
// 微任务的优先级比宏任务高，微任务的优先级比宏任务高
// 微任务： promise的then回调，async/await下面的代码，process.nextTick
// 宏任务： 定时器(setTimeOut) , setInterval 

// 14. async/await 
// async默认返回promise实例，可以直接.then()
// await 如果后面跟的是同步代码，等着同步代码执行，如果是promise实例，等着promise实例，await 有返回值，如果右边是一个值就会把这个值返回，如果是一个promise,获取这个promise resolve时传入的数据 
// await 下面的代码会变成微任务

// 15. cookie session token 
// cookie : 用来记录http状态，随着http在前后端来回传递
// session : 会话控制，把一些敏感的信息写进session中，临时文件，服务端技术用来存储用户的敏感信息，存储在服务器上；session id是存在cookie中
// token : 令牌，是一种身份校验机制，根据用户登录后的根据用户的id,时间等一些信息加密后生成的字符串，下次客户端再来的时候带着token来，服务器就认识这个请求了。
// 使用token的方式： 
//  1. 把token 写到cookie中
// 2. 服务端饭给前端，前端自己保存，下次请求的时候自己带着来，一般存在localStorage中
// 3. 写在http请求头中,服务端可以从请求头中获取
// let xhr = new XMLHttpRequest();
// xhr.setRequestHeader('key','value); 设置请求头  
