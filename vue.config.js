module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/app.scss";'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 3131,
    https: false
  },
}