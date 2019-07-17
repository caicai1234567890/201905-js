// fs模块:是Node.js内置的模块,file system 的缩写,用于文件的读写

let fs = require('fs');

// 1. 异步读取文件
// __dirname 当前文件说出的路径
// __filename 当前文件的绝对路径且是带扩展名的路径
// fs.readFile(带路径的文件名,options,callback) 
fs.readFile('./1.txt','utf8',function(err,data){
    // 如果读取成功err是null,如果读取失败err就是一个对象
    if(err){
        console.log('err',err);
        // no such file or directory 没有这样一个文件或者文件夹,导致报错的原因是文件路径错误
    }else{
        // 如果文件读取成功会把读到的数据传给data
        console.log('data',data);
    }
});

// 2.同步读取 
// fs.readFileSync('./1.txt','utf8');
// 返回值是读取到的内容
// let data = fs.readFileSync('./11.txt','utf8');
// console.log(data);

// 修改文件(向文件中写如内容)

// 3. 异步写入文件
// fs.writeFile(path,data,option,callback )
// path : 带路径的文件名,如果没有会创建一个
// data : 写入文件的内容
// option 文件的编码
// callback : 写入后执行的回调
/* let code = 'function sum(a,b) {return a + b};';
fs.writeFile('./a.js',code,'utf8',(err,data) => {
    // 如果写如失败err就是一个对象,如果成功err就是null
    if(err){
        console.log('写入失败');
        // 一般写如文件失败是由于文件夹的权限有问题
    }else{
        console.log('写入成功');
    }
}); */

// fs.writeFile()是覆盖式写入,原文件的内容会被覆盖,如果要追加先把原来的文件内容读取出来然后拼接上这次要写入的内容然后一并写回去

// 同步写入 
// 同步写入没有返回值
// fs.writeFileSyc(path,data,option);
// path : 文件名
// data : 写入文件的内容
// option : 以何种编码写入
let htmlStr = `<!DOCTYPE><html><head>
<meta name = "description" content="aaa">
<meta name = "keywords" content="">
<title>这是一个title标签</title>
<!--TDK 做SEO时要设置 -->
</head>
<body>
<div>app</div>
</body>
</html>`;
let wdata = fs.writeFileSync('./b.html',htmlStr,'utf8');
// console.log(wdata);

// 4.向文件中追加内容
// 异步追加
// fs.appendFile(path,data,option,callback)
// path : 文件名(含路径)
// data 写入文件的内容
// option 编码
// callback 追加后的回调

let code2 = '\nfunction minus(a,b){return a-b}';
// \n 换行
// \n\r 空行
/* fs.appendFile('./a.js',code2,'utf8',(err,data)=>{
    if(err){
        console.log(err);   
    }else{
        console.log('追加成功');
    }
}); */

// 同步追加 
// fs.appendFileSync(path,data,option);
fs.appendFileSync('./a.js',code2,'utf8');