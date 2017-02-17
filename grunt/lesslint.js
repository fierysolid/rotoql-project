module.exports = {
    options: {
        less: {
            paths: ['app/components/']
        },
        csslint: {
            csslintrc: '.csslintrc'
        }
    },
    src: [
        'app/src/*.less'
    ]
};
