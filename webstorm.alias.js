const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('src'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@v': path.resolve(__dirname, 'src/views'),
      '@u': path.resolve(__dirname, 'src/utils'),
      '@img': path.resolve(__dirname, 'src/assets/images')
    }
  }
}