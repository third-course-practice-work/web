import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';

export const buildPlugins = (isDev: boolean): webpack.WebpackPluginInstance[] => {
    let plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({ template: path.resolve('public', 'index.html') }),
    ];

    if (isDev) {
        plugins = [
            ...plugins,
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin()
        ]
    }

    return plugins;
}