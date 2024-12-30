module.exports = {
    publicPath: '',
    outputDir: 'dist',
    assetsDir: 'assets',
    configureWebpack: {
      output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
      }
    }
  };
  