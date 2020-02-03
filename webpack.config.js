

module.exports = {
  entry: __dirname + '/src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.m?(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
};