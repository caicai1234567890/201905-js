
// 中间件是用来增强 redux 功能的
// 常用的 redux 的中间件
// 1. redux-logger: 当状态发生改变的时候把状态改变之前的值和改变之后的值输出到控制台
// 1.1 安装 redux-logger yarn redux-logger --save
// 1.2 使用中间件，在 createStore 的时候使用中间件,使用中间件需要使用 redux 上的一个 applyMiddleWare 方法