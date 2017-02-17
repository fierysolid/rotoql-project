define([
        'angular',
        'views',
        'angular-material',
        'angular-aria',
        'angular-animate',
        'angular-messages',
        './controllers/package'
    ],
    function defineMain(angular, views) {

        function App() {

            this.module = angular.module('rotoql', [
                'ngAnimate',
                'ngMaterial',
                'ngMessages',
                'rotoql.controllers'
            ]);

            this.module.config([
                '$logProvider',
                '$mdAriaProvider',
                '$mdThemingProvider',
                '$mdGestureProvider',
                function(
                    $logProvider,
                    $mdAriaProvider,
                    $mdThemingProvider,
                    $mdGestureProvider
                ) {

                    $mdGestureProvider.skipClickHijack();
                    $mdAriaProvider.disableWarnings();
                    $logProvider.debugEnabled(false);

                    var primaryBlueMap = $mdThemingProvider.extendPalette('blue', {
                            '500': '40b1f1'
                        }),
                        accentGreyMap = $mdThemingProvider.extendPalette('grey', {
                            '500': '252830'
                        }),
                        warnRedMap = $mdThemingProvider.extendPalette('red', {
                            '500': 'D84315'
                        });

                    $mdThemingProvider.definePalette('primaryBlue', primaryBlueMap);
                    $mdThemingProvider.definePalette('accentGrey', accentGreyMap);
                    $mdThemingProvider.definePalette('warnRed', warnRedMap);

                    $mdThemingProvider.theme('default')
                        .primaryPalette('primaryBlue', {
                            default: '500'
                        })
                        .accentPalette('accentGrey', {
                            default: '500'
                        })
                        .warnPalette('warnRed', {
                            default: '500'
                        });

                    $mdThemingProvider.theme('default').foregroundPalette[3] = "#838e94";
                }
            ]);

            if (views && views.init) {
                this.module.run(['$templateCache', views.init]);
            }
        }

        App.prototype.init = function() {
            angular.bootstrap(document.body, ['rotoql']);
        };

        return App;
    });
