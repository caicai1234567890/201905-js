// 现在需要在这个文件中调用3-test.js中的fn方法
// 导入模块 使用require('被依赖js文件的路径')方法 ;
// 因为4-使用模块.js需要使用3-test.js中的fn方法,所以需要导入
let importFn = require('./3-test');
// 在导入3-test.js时候,这个文件3-testjs中的代码就会执行
// console.log(importFn);
// console.log('4',xxx);
console.log(importFn.fn());
console.log(importFn.xxx);