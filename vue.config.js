module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '/query': {
        target: 'http://localhost:8086'
      }
    }
  }
}
