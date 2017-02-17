define(function defineNBAService() {
    'use strict';

    function nbaService($http) {
        var service = {},
        apiBase = '//api.rotoql.com/';

        service.getPlayers = function() {
            return $http({
                method: 'get',
                url: apiBase + 'v1/export/nba/players'
            });
        };

        return service;
    }

    return ['$http', nbaService];
});
