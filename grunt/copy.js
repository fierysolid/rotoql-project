module.exports = {
    images: {
        expand: true,
        src: [
            'app/src/img/**/*'
        ],
        dest: 'dist/i/',
        flatten: true,
        filter: 'isFile'
    },
    ngMaterial: {
        src: 'app/components/angular-material/angular-material.min.css',
        dest: 'dist/angular-material.min.css'
    }
};
