
// 动态导入
// import 只能是同步的，并且模块导入是静态的发生在js代码执行之前，而且只能写在顶层作用域中

// 但是有一些场景需要动态导入模块
// 此时我们需要用import() 方法
// import方法支持动态导入，返回一个Promise实例，可以直接.then(),then的第一个回调收到的参数就是模块中的内容

// 动态导入就是想在什么地方就在什么地方导入
setTimeout(()=>{
    import('./5-export.js').then((res)=>{
        console.log(res);
    })
},1000);

let ran = Math.round(Math.random() * (10 - 0 ) + 0);
console.log(ran);
if(ran > 5){
    import('./4-export.js').then((res)=>{
        console.log(res);
    });
}
// 动态导入模块的场景 ： 
// 1，按需加载，如点击或者滑动的时候去加载
// 2. 条件加载，条件为true 的时候加载a模块，否则加载b模块
// 3. 模块的路径是动态的，例如路径是通过ajax从服务端获取的


// 动态加载多个模块 ： Promise.all([])
Promise.all([
    import('./4-export.js'),
    import('./5-export.js')
]).then((arr)=>{
    console.log('39');
    console.log(arr);
});

// import() 和 async/await 
// import() 会返回promise对象
async function getM(){
    let A = await import('./5-export.js');
    let B = await import('./4-export.js')
    return [ A, B];
    // console.log(A);
}
getM().then((res)=>{
    console.log('47');
    console.log(res);
});