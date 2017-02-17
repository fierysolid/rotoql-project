define([
        'angular',
        './main-controller',
        '../services/package'
    ],
    function definePackage(angular, MainController) {

        var module = angular.module('rotoql.controllers', ['rotoql.services']);

        module
            .controller('MainController', MainController);

        return module;

    });
