

// export 关键字用于导出的内容 
export var name = 'lisi' ;
export var age = 20 ;
export var job = 'FR' ;

export function sum(a,b){
    return a + b ; 
}

export class Teacher{
    constructor(name, age){
        this.name = name ;
        this.age == age;
    }
}

let ok = 100 ;
// 单个导出 export 变量声明语句