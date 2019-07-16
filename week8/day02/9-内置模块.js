// 内置模块: Node.js 核心模块,内置模块是随着node一起安装的,都是Node的核心模块.
// fs : file system 用于文件的读写
// fs模块: (file system)是用来读写文件的,专门用来处理文件的服务器

// 1.使用fs模块先导入fs模块,其他内置模块在使用之前要先导入
let fs = require('fs');  // 导入内置模块和第三方的模块时都不需要写路径,导入自定义模块时必须写路径
// 1. 异步读取文件
// fs.readFile(fileName,option,callback);
// fileName : 文件名
// option : 设置读取的内容哪种编码,默认值是buffer,存储的都是二进制的数据,一般在机器之间传递二进制
// callback : 回调函数,读取文件完成之后异步执行这个回调函数
// 
/* fs.readFile('./1.txt','utf8',function(err,data){
    // 读取失败的时候err是存在的
    // console.log(err);
    // 读取失败的时候err是一个对象,读取成功时是null

    // console.log(data);
   if(err){
        console.log(err); 
    }else{
        console.log(data);
        // 读取的时候默认的是buffer ,buffer存储的都是二进制数据
        // 设置option为utf8以后自动把读取到的内容变成utf8格式的
        // console.log(data.toString());
    }
    
});
console.log(123); */

// 同步读取文件 
// fs.readFileSyc(fileName ,options);
// fileName : 文件名
// options : 编码格式 
// 这个方法会返回读取到的内容,如果读取失败直接报错,同步的情况可以使用try catch来捕获错误
let data = fs.readFileSync('./11.txt','utf8');
console.log(data);
console.log(123);