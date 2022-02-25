const path = require('path');
const { merge } = require('webpack-merge');
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');
const version = require('./package.json').version // DO NOT require entire config
const { ProvidePlugin } = require('webpack');

const demoConfig = {
    output: {
        // versioned output directory i.e. /build/1.0.0, /build/1.1.0, etc.
        path: path.resolve(process.cwd(), 'build/' + version),
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, '/src/path/to/components')
        }
    },
    plugins: [new ProvidePlugin({
        __: ['@wordpress/i18n', '__'],
        useState: ['@wordpress/element', 'useState'],
        useEffect: ['@wordpress/element', 'useEffect'],
    })]
}

module.exports = merge(wpScriptsConfig, demoConfig);