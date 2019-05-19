module.exports = {
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: `${__dirname}/../dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  }
};
