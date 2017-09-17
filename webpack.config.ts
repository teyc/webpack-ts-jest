import * as webpack from "webpack"

const config: webpack.Configuration = {

    entry: {
        'app': './src/app.ts',

        // example: 'vendor': ['lodash', 'jquery']
        'vendor': [], 
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            // filename: "vendor.js"
            // (Give the chunk a different name)

            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        })
    ],

    output: {
        filename: 'dist/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
}

export default config