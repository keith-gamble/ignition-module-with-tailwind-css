// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

const LibName = "ExampleComponents";

/**
 * Custom function to copy built files to the Gradle resources directory.
 */
function copyToResources(compilation, callback) {
    const generatedResourcesDir = path.resolve(__dirname, 'build/generated-resources/mounted/');
    const jsToCopy = path.resolve(__dirname, "dist", `${LibName}.js`);
    const cssToCopy = path.resolve(__dirname, "dist", `${LibName}.css`);
    const jSResourcePath = path.resolve(generatedResourcesDir, `${LibName}.js`);
    const cssResourcePath = path.resolve(generatedResourcesDir, `${LibName}.css`);

    const toCopy = [
        { from: jsToCopy, to: jSResourcePath },
        { from: cssToCopy, to: cssResourcePath }
    ];

    if (!fs.existsSync(generatedResourcesDir)) {
        fs.mkdirSync(generatedResourcesDir, { recursive: true });
    }

    toCopy.forEach(file => {
        if (fs.existsSync(file.from)) {
            fs.copyFileSync(file.from, file.to);
        }
    });

    callback();
}

module.exports = {
    entry: './src/index.ts',
    output: {
        library: LibName,
        path: path.join(__dirname, "dist"),
        filename: `${LibName}.js`,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".jsx", ".js", ".ts", ".tsx", ".d.ts", ".css"],
        modules: [
            path.resolve(__dirname, "node_modules")
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${LibName}.css`
        }),
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tapAsync('CopyToResourcesPlugin', copyToResources);
            }
        }
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "mobx": "mobx",
        "mobx-react": "mobxReact",
        "@inductiveautomation/perspective-client": "PerspectiveClient"
    },
    optimization: {
        splitChunks: false
    },
};