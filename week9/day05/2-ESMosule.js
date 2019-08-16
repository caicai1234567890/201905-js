
// 导出 export关键字

// 单个导出

/* export var name = 'lisi' ;
export var age = 30 ;
export const job = "FE";

export class Teacher{
    constructor(name , age){
        this.name = name ;
        this.age = age;
    }
}
 */
// 批量导出 
var name = 'lisi',
    age = 13 ;
const x = 3 ;
function sum(a,b){
    return a + b;
}

class Teacher{
    constructor(name, age){
        this.name = name ; 
        this.age = age ;
    }
}

export { name, age, x, sum, Teacher};

// 默认导出 
export default function minus(a,b){
    return a - b;
}
