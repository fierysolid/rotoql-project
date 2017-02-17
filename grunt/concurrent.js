module.exports = {
    'lint': [
        'eslint'//,
        //'lesslint'
    ],
    'pre-build': [
        'less',
        'ngtemplates',
        'replace:index',
        'copy'
    ],
    'compile-1st-pass': [
        'postcss:dist',
        'postcss:ngMaterial',
        'requirejs'
    ],
    'compile-2nd-pass': [
        'uglify',
        'imagemin',
        'htmlmin'
    ],
    options: {
        limit: 4
    }
};
