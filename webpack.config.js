module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './'
  }
}