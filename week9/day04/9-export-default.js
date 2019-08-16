

// 在前面的例子中，我们要想导入，必须知道导出的时候模块的名字都是什么，如果不知道就没办法导入

// ESModule 提供了一个默认导出,其他模块在导入的时候可以不关心导出的名字是什么

// 一个模块中默认导出只能有一个，多了要报错

export default function sum(a,b){
    return a - b ; 
}

export  function mins(x,y){
    return a * b;
}