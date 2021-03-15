const path = require("path");
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const workspaceDir = process.env.pwd;
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        index: "./src/js/index.js",
        home: "./src/js/home.js",
        about: "./src/js/about.js"
    },
    // entry: "./src/js/index/index.js",        
    output: {
        path: path.join(workspaceDir, "public"),        
        filename: "js/[name].js",
        publicPath: "/",        
    },
    mode: "development",
    watch: true,
    devtool: "eval-source-map",
    // stats: {
    //     children: true
    // },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }                       
                }                     
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },        
            {
                // test: /\.(jpe?g|png|gif|svg)$/, 
                // use: {
                //     loader: 'file-loader',                
                //     options: {
                //         name: "img/[name].[ext]",
                //         // context: '/img',
                //         publicPath: "/"                        
                //     }
                // }        
                // use: [
                //     {
                //       options: {
                //         name: "img/[name].[ext]",
                //         outputPath: "img",
                //         publicPath: "/img"
                //       },
                //       loader: "file-loader"
                //     }
                //   ]        
                // test: /\.(svg|png|jpe?g|gif)$/,
                // use: {
                //     loader: "file-loader",
                //     options: {
                //         name: "[name].[ext]",                        
                //         // publicPath: "/img"
                //     }
                // }
                // use: ["file-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }


        ]
    },
    plugins: [new HtmlWebpackPlugin({
        chunks: ["index"],
        filename: `${path.join(workspaceDir, "/page/index.html")}`,
        template: "./src/page/index.html"
    }),
    new HtmlWebpackPlugin({
        chunks: ["home"],
        filename: `${path.join(workspaceDir, "/page/home.html")}`,
        template: "./src/page/home.html"
    }),  
    new HtmlWebpackPlugin({
        chunks: ["about"],
        filename: `${path.join(workspaceDir, "/page/about.html")}`,
        template: "./src/page/about.html"
    }),     
    // new CopyPlugin({
    //     patterns: [
    //         {
    //             from: "src/img",
    //             to: "img",
    //             // context: "app/",
    //         },
    //     ],
    // }),
    // new BundleAnalyzerPlugin()
    // new CopyPlugin({
    //     patterns: [
    //       { from: "src/img", to: "public/img" }          
    //     ],
    //   }),
    // ],
    // new CleanWebpackPlugin()],
    // optimization: {
    //     minimizer: [new TerserPlugin()]
    // }
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: `${path.join(workspaceDir, "page","index.html")}`,
    //         template: "./src/page/index.html"
    //     })
    // ]
    ]
}



// console.log(path.join(workspaceDir, "public", "img"),);