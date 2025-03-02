import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; //to access built-in plugins
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildWebpack } from './config/webpack/buildWebpack';

type EnvType = {
    mode: 'development' | 'production',
    port: number
}

export default (env: EnvType): webpack.Configuration => buildWebpack({port: env.port ?? 5000, isDev: env.mode === 'development', rootPath: __dirname});