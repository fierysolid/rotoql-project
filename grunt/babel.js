module.exports = {
    options: {
        ast: false,
        compact: false,
        comments: true,
        minified: false,
        sourceMap: false,
        presets: ['es2015']
    },
    src: {
        files: {
            'dist/app.js': 'dist/app.js'
        }
    }
};
