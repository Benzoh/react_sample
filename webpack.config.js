module.exports = {
  // simple config from http://webpack.github.io/docs/configuration.html
  entry: "./src/index.js",
  output: { path: __dirname + "/public/dist", filename: "bundle.js" },
  mode: "development",

  // using webpack loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // or just "babel"
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};