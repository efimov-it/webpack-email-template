const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "/src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png)$/u,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            },
            {
                test: /\.html$/u,
                include: path.resolve(__dirname, 'src/components/'),
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        })
    ],
    devServer: {
        overlay: true,
        open: true
    },
    mode: process.env.NODE_ENV === 'production ' ? 'production' : 'development'
}