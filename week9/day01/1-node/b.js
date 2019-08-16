
let a = require('./a'); // .js和.json可以不用写

// console.log(a);

// let customs = require('./custom'); // 导入一个json文件,nodejs自动把json处理成对象(这和fs.readFile不同,fs从文件中读取,如果设置了编码,读取json时得到的是字符串)

let fs = require('fs');
fs.readFile('data.json','utf8',(err,data)=>{
    console.log(data);
});
