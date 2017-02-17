module.exports = {
    compile: {
        options: {
            paths: [
            'app/components'
            ]
        },
        files: {
            '.tmp/app.css': [
                'app/src/main.less'
            ]
        }
    }
};
