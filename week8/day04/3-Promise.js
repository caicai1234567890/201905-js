
// Promise 用来管理异步的,Promise本身是同步的,.then里面的回调函数是异步的
// 

new Promise((resolve,reject)=>{
    resolve();
    reject();
    throw '123';
    console.log(0);
}).then((data)=>{
    // 异步处理成功后执行的回调 
    console.log(1);
},(err)=>{
    // 异步处理失败执行的
    console.log(2);
}).then(()=>{
    console.log(3);
},()=>{
    console.log(4);
});
console.log(5);