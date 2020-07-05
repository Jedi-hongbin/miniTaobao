module.exports = {
  // 打包后是否屏蔽log
  dropConsole: true,

  // 开发环境api地址
  devApi: 'http://dedstc.isart.me/api',

  // 生产环境api地址
  prodApi: 'https://dstc.isart.me/api',

  // 七牛空间地址
  qiniuSpace: 'http://twst.isart.me/',

  // 路径别名，要保持ide的快捷跳转不会失效，请在修改或添加后也对应修改 jsconfig.json 中的路径别名
  pathAlias: {
    '@': 'src',
    '@c': 'src/components',
    '@l': 'src/layout',
    '@v': 'src/views',
    '@u': 'src/utils',
    '@img': 'src/assets/images'
  }
}