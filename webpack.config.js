const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: ["./app/main.js"],
 output: {
   filename: "www/bundle.js"
 },
 plugins: [
    new HtmlWebpackPlugin({
       template: './app/index.html',
       filename: 'www/index.html',
       minify: false,
       inject: 'body'
    })
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
 },
}
