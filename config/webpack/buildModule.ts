import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export const buildModule = (isDev: boolean): webpack.ModuleOptions => {
    let options: webpack.ModuleOptions = {}

    if (isDev) {
        options.rules = [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: "[path]-[name]-[local]" ,
                            }
                        }
                    },
                    "sass-loader",
                ],
            }
        ]
    }

    if (!isDev) {
        options.rules = [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: "[hash:base64:16]",
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
        ];
    }

    options.rules = [
        ...options.rules,
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ];

    return options;
}