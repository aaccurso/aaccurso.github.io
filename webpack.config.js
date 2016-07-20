module.exports = {
  entry: './_src/app.js',
  output: {
    path: __dirname + "/js",
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};
