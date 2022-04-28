const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    }
};
