const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|jpeg|gif|webm|JPG)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            path:'assets/'
                            /* outputPath: "assets" */
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    /*  devServer: {
         open: true,
     }, */
    /* devtool: 'source-map' */

}