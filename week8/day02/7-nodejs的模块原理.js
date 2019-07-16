// 目录中不要有汉字,文件和文件夹不要叫node/npm 

// 
// console.log(module);
// console.log(require);

// 在浏览器中settimeout,json...都是定义在window对象上的
// console.log(global);
// node中的全局对象是global 
// node天生自带模块化的,在js文件外面会套一个自执行函数,并且给自执行函数传入几个形参:exports,module,require,__dirname,__filename
(function(exports,module,require,__dirname,__filename){
    //  这里面才是咱门自己写的js代码
})
(exports,module,require,__dirname,__filename);
// console.log(exports); 导出
// console.log(module); 模块
// console.log(require); 导入模块的方法
console.log(__dirname); // 当前js文件夹所在的目录的绝对路径
console.log(__filename); //当前js文件的文件名,带绝对路径和扩展名