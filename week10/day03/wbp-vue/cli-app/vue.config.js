
// 这个文件用于修改cli 和 webpack 的配置

// 基于CommonJS 的风格导出一个对象

module.exports = {
  outputDir: './dist',
  // 指定文件打包后的输出路径
//   linkOnSave: false,
  // 启用语法检查，默认启用
  productionSourceMap: false,
  // 生产环境是否需要source map

  devServer: {
    // vue-cli 支持所有的webpack-dev-server
    port: 8082,
    open: true, // 自动打开浏览器
    https: false, // 是否启动https
    proxy: {
    // 用来解决开发环境跨域的问题，必须会
      '/home': {
        target: 'https://www.itouzi.com',
        changeOrigin: true,
        secure: false
      }

    }
  }
}
