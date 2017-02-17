module.exports = {
    index: {
        options: {
            patterns: [{
                match: 'ver',
                replacement: Date.now()
            }]
        },
        files: [{
            expand: true,
            flatten: true,
            src: ['index.html'],
            dest: 'dist/'
        }]
    }
};
