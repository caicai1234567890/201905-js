
function fn() {
    return 1 + 1;
}
function sum(a,b){
    return a + b;
}

// module.exports = fn; 直接导出fn本身
// exports.fn = fn;  // 导出一个对象
// exports.fn = sum;

module.exports.fn = fn;