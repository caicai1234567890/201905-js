
// 导入 import 

// import { name, age, Teacher } from './2-ESMosule.js' ; 原名导入

// import { name as name1 } from './2-ESMosule.js';  导入的时候重新命名

// import * as obj from './2-ESMosule.js' ; // 全部导入,此时obj是一个对象,对象中包含了所有模块导出的内容,导出时的变量名都成了obj的属性名 

// 导入默认导出的内容 import 任意变量名 from 默认导出的模块
// import sum from './2-ESMosule.js' ;

// import()方法,import是关键字只能用在同步导出,而且必须置于全局作用域中,不能写在函数或者if中


import('./2-ESMosule.js').then((res)=>{
    // res就是模块导入成功后的内容
    console.log(res);
});

// import() 和 async/await
async function getModule(){
    let A = await import('./2-ESMosule.js');
    console.log(A);
    return A ;
}

getModule().then((res)=>{
    // res 就是getModule执行的返回值A 

});

// 现在Chrome 已经原生支持import(),我们需要掌握它