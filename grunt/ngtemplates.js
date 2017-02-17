module.exports = {
    options : {
        bootstrap: function (module, script) {
            return 'define([],{init:function($templateCache) {' + script + '}});';
        },
        htmlmin  : {
            collapseBooleanAttributes    : true,
            collapseWhitespace           : true,
            removeAttributeQuotes        : true,
            removeComments               : true,
            removeEmptyAttributes        : false,
            // can't use this b/c some of our legacy CSS
            // uses attr selectors. FIXME use class instead
            // NOTE this, I think, is the least hacky fix
            // for now
            removeRedundantAttributes    : false,
            removeScriptTypeAttributes   : true,
            removeStyleLinkTypeAttributes: true
        }
    },
    dist: {
        cwd : 'app',
        src : 'src/html/**/*.html',
        dest: '.tmp/views.js'
    }
};
