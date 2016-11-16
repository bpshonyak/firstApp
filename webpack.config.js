const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
 entry: {
   app: "./app/main.js"
 },
 output: {
   path: './www',
   filename: "bundle.js"
 },
 plugins: [
    new HtmlWebpackPlugin({
       template: './app/index.html',
       filename: 'index.html',
       minify: false,
       inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: './app/api', to: 'api' }
    ])
 ],
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
