'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('SettingsCtrl', function ($scope, $rootScope, $server, Facebook, $state) {
        $rootScope.titleHeader = "Thiết lập";
        var uFb;
        $scope.tokenFB = null;
        $scope.uFbs = []; // user facebooks

        $scope.addUserFb = function () {
            uFb = {
                user: $scope.uFb.user,
                pass: $scope.uFb.pass
            };
            $scope.uFbs.push(
                {
                    user_facebook: uFb.user,
                    pass_facebook: uFb.pass,
                    status: "Chưa kích hoạt"
                }
            );
            console.log($scope.uFbs);
            $scope.uFb.user = '';
            $scope.uFb.pass = '';
        };

        var idUser = $rootScope.user.id;


        function getuFbs (idUser) {

            $server.getUFB(idUser)
                .success(function (datas) {
                    console.log("Datas FB User:", datas);
                    $scope.uFbs = datas.datas;
                })
                .error(function (err) {
                    console.log("Error:", err);
                });
        }

        getuFbs(idUser);

        $scope.active = function () {

            console.log("Active Account facebook");

            // From now on you can use the Facebook service just as Facebook api says
            Facebook.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    Facebook.logout(function (response) {
                        console.log("Logout:", response);
                        Facebook.login(function (response) {
                            // Do something with response.
                            console.log("login:", response)
                            var short_token = response.authResponse.accessToken;
                            $server.setLongToken({
                                'short_token': short_token,
                                'userFb': uFb.user,
                                'passFb': uFb.pass,
                                'idUser': $rootScope.user.id
                            })
                        });

                    });
                    $scope.loggedIn = true;
                } else {
                    Facebook.login(function (response) {
                        // Do something with response.
                        console.log("login:", response)
                    });
                    $scope.loggedIn = false;
                }
            });

        };



        $scope.removeSession = function (idUser) {
            console.log("Remove idUser:", idUser);
            $server.removeLongToken({'idUser': idUser})
                .success(function (data) {
                    console.log("Data remove success:", data);
                    $scope.tokenFB = null;

                    $fb.query(function (FB) {
                        FB.logout(function (res) {
                            console.log("Logout Facebook:", res);
                        });
                    });

                    $state.go('campaign', {}, {reload: true});
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
