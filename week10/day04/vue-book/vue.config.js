// 和webpack.config.js 一样,修改之后要重启
// 开发完以后要上线,上线前要把前端的代码打包到后端的项目中,所以需要webpack配置,我们只需要告诉webpack 把打包之后的结果输出到服务端项目的某个目录中
module.exports = {
  outputDir: '../vue-book-server/static', // 指定打包后文件输出的目录
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
