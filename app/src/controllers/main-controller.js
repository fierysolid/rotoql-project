define(function defineMainController() {
    'use strict';

    function mainController($scope, $log, csvService, nbaService) {
        var that = this;
        $scope.currentNavItem = 'players';

        function handleError(err) {
            $log.error(err);
        }

        nbaService.getPlayers().then(function(res) {
            that.players = csvService.csvJSON(res.data);
        }, handleError);
    }

    return ['$scope', '$log', 'csvService', 'nbaService', mainController];
});
