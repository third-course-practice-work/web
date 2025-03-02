import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (isDev: boolean, port: number): DevServerConfiguration | undefined => {
    if (!isDev) return undefined;

    return {
        open: true,
        port: port,
        hot: true,
        server: 'https'
    };
};
