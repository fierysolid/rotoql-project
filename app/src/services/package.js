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

        var module = angular.module('rotoql.services', []);

        module
            .service('csvService', csvService)
            .service('nbaService', nbaService);

        return module;

    });
