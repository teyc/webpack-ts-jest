import * as webpack from "webpack"

const config: webpack.Configuration = {

    entry: {
        'app': './src/app.ts',
        'vendor': './src/vendor.ts'
    },

    output: {
        filename: 'dist/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [ /node_modules/ ],
                loader: 'ts-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
}

export default config