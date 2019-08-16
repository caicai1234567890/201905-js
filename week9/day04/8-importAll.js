
// 全部导入： 把模块中导出的内容全部导入

import * as obj from './5-export.js';

// obj是一个对象，对象中的属性名是导出时的变量名，属性的值是变量所代表的值
let { name, age } = obj ;
console.log(obj);

console.log(name);