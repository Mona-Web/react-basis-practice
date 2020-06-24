const webpackMerge = require('webpack-merge')
const webpackConfigCommon = require('./webpack.config.common')

module.exports = webpackMerge(webpackConfigCommon, {
  mode: 'development',
  devServer: {
    port: 8080,
    progress: true, // 显示打包的进度条
    contentBase: './dist', // 根目录
    open: true, // 自动打开浏览器
    compress: true, // 启动 gzip 压缩
    // 设置代理
    // !本地怎么跨域去请求一些其他的接口？
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
      '/api': 'http://localhost:3000'
    }
  },
  optimization: {
    usedExports: true // 在开发模式下配置 tree shaking
  }

  //   // !自动刷新 devServer自动开启
  //   watch: true, // 默认false
  //   watchOptions: {
  //     ignored: /node_modules/,
  //     // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
  //     // 默认为 300ms
  //     aggregateTimeout: 300,
  //     // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
  //     // 默认每隔1000毫秒询问一次
  //     poll: 1000
  //   }
})
