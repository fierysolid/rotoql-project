module.exports = {
    options: {
        livereload: true
    },
    less: {
        files: ['app/src/**/*.less'],
        tasks: [
            'lesslint',
            'less',
            'postcss:dist',
            'postcss:ngMaterial'
        ]
    },
    scripts: {
        files: [
            'app/src/**/*.js',
            'app/src/html/**/*.html',
            'index.html'
        ],
        tasks: [
            'eslint',
            'replace:index',
            'ngtemplates',
            'requirejs',
            'babel',
            'uglify:app'
        ]
    },
    img: {
        files: [
            'app/src/img/**/*'
        ],
        tasks: [
            'copy:images',
            'imagemin'
        ]
    }
};
