
// 项目中会把数据的请求逻辑抽离称js文件,把对应的方法导出,使用的组件重对应的js文件导入
import axios from './config'
// ./config/index.js 中的index.js可以省略

export let getSliders = () => axios.get('/api/sliders')

// 请求热门图书
export let getHotBook = () => axios.get('/api/hot')
