console.log(111000);
function fn(){
    return 1 + 1;
}
fn();
let xxx = 12;

// 因为node没有html了,如果js文件互相依赖就要使用模块化,把这个js文件中的内容导出,等到需要使用这些内容的模块导入

// 所谓模块化就是把别人需要的东西导出去,如果不导出则拿不到,把自己需要的东西导入进来,别人的模块导出是么,我们导入的时候就能拿到什么,别人没导出我们拿不到
// 导出方式: 
// 1. 直接导出fn
// module.exports = fn;
// module.exports = xxx;
// 2. exports.fn = fn; 导出一个对象,对象中有一个属性fn,属性值是fn这个函数
// 如果要导出多个,使用exports.属性名 = 属性值 这种形式.其中属性名可以自定义,但是导出的时候叫什么,导入的时候还得用这个属性名
exports.fn = fn;
exports.xxx = xxx;