import webpack from 'webpack';
import path from "path"
import { buildPlugins } from "./buildPlugins"
import { buildModule } from "./buildModule"
import { buildDevServer } from "./buildDevServer"

export type WebpackPropType = {
    isDev: boolean,
    port: number,
    rootPath: string
}

export const buildWebpack = (props: WebpackPropType): webpack.Configuration => ({
    mode: props.isDev ? 'development' : 'production',
    entry: path.resolve(props.rootPath, 'src', 'index.tsx'),
    output: {
        path: path.resolve(props.rootPath, 'build'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    plugins: buildPlugins(props.isDev),
    module: buildModule(props.isDev),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: props.isDev ? 'inline-source-map' : undefined,
    devServer: buildDevServer(props.isDev, props.port),
});