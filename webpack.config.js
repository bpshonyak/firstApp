const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 entry: {
   app: "./app/main.js"
 },
 output: {
   path: './www',
   filename: "bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.scss$/,
       loader: ExtractTextPlugin.extract('css!sass')
     },
     {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'url'
     },
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
 plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      minify: false,
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: './app/api', to: 'api' }
   ]),
   new ExtractTextPlugin('./style.css', {
      allChunks: true
   })
 ],
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
