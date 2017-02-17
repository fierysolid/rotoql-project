var path = require('path'),
    override;

override = function override(paths) {
    'use strict';
    paths.jquery = 'empty:';
    paths.angular = 'empty:';

    return paths;
};


module.exports = function gruntRequire(grunt) {
    return {
        dist: {
            options: {
                baseUrl: 'app/',
                findNestedDependencies: true,
                out: 'dist/app.js',
                optimize: 'none',
                paths: override(require(path.join('../', 'app/require/paths.json'))),
                shim: require(path.join('../', 'app/require/shims.json')),
                name: 'src/main',
                useStrict: true,
                wrap: true,
                wrapShim: true,
                preserveLicenseComments: false, // must be false when generating sourcemaps
                generateSourceMaps: true,
                onBuildWrite: function(module, path, content) {
                    content = content.replace(/\.\s*catch\s*\(/gm, "['catch'](");
                    return content;
                }
            }
        }
    }
};
