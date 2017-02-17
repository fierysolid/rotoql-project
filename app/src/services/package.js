define([
        'angular',
        './csv-service',
        './nba-service'
    ],
    function definePackage(
        angular,
        csvService,
        nbaService
    ) {
        'use strict';

        var module = angular.module('rotoql.services', []);

        module
            .service('csvService', csvService)
            .service('nbaService', nbaService);

        return module;

    });
