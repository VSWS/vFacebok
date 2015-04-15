'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('SettingsCtrl', function ($scope, $rootScope, $server, $fb, $state) {
        $rootScope.titleHeader = "Thiết lập";

        $scope.tokenFB = null;

        $server.getLongToken($rootScope.user.id)
            .success(function (data) {
                console.log("Data get long token:", data);
                if ( data.status ) {
                    $scope.status = data.status.error;
                } else {
                    $scope.tokenFB = data.data.token;
                    $scope.idUser = data.data.User;
                }
            })
            .error(function (err) {
                console.log("Error get long token:", err);
            });

        $scope.removeSession = function (idUser) {
            console.log("Remove idUser:", idUser);
            $server.removeLongToken({'idUser' : idUser})
                .success(function (data) {
                    console.log("Data remove success:", data);
                    $scope.tokenFB = null;

                    $fb.query(function (FB) {
                        FB.logout(function (res) {
                            console.log("Logout Facebook:", res);
                        });
                    });

                    $state.go('campaign',{},{reload: true});
                })
                .error(function (err) {
                    console.log("error remove:", err);
                })
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
