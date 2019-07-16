// 写两个方法: 一个求两数之和sum方法,一个求链数之差的minus方法
function sum(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') throw TypeError('ele should be number');
    return a + b;
}

function minus(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') throw error;
    return a - b;
}

// 导出多个
// 1. 
// exports.sum = sum;
// exports.minus = minus;
// 2. 
module.exports = {
    sum , 
    minus
};