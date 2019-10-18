const path = require('path')
const webpack = require('webpack') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8081,
        contentBase: 'src',
        hot: true
    },
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.less$/, use:['style-loader', 'css-loader', 'scss-loader'] },
            { test: /\.jpg|png|gif|bmp|jpeg$/, use:'url-loader?name=[hase:8]-[name].[ext]' },
            { test: /\.ttf|eot|svg|woff|woff2$/, use:'url-loader' },
            { test: /\.js$/, use:'babel-loader', exclude:/node_modules/ },
            { test: /\.vue$/, use:'vue-loader' }
        ]
    },
    resolve: {
        // alias: {
        //     "vue$": "vue/dist/vue.js"
        // }
    }
}