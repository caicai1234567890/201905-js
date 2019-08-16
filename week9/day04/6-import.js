

// import 关键字用于从其他模块中导入内容

// 导入4-export.js 
// import { name, age, job, Teacher} from "./4-export.js" ; 

// 写在import后面的花括号中的都是变量，咱门自己声明的变量不能和花括号里面的重名
// 导入5-export.js
import { name as N, age, job } from './5-export.js' ;
console.log(N,age,job) ;

// 导入事项 
// 1. import { 导入变量 } from ‘带路径的模块文件’
// 2. 模块没有导出的变量不能用
// 3. html在引入模块化的js文件的时候，script标签上写type="model"

