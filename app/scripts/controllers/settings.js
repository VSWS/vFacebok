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

        $scope.active = function (index) {

            console.log("Active Account facebook", $scope.uFbs[index].user_facebook);

            // From now on you can use the Facebook service just as Facebook api says
            Facebook.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    Facebook.logout(function (response) {
                        console.log("Logout:", response);
                        Facebook.login(function (response) {
                            // Do something with response.
                            console.log("login:", response);
                            var short_token = response.authResponse.accessToken;
                            console.log("Token:", short_token);

                            $server.setLongToken({
                                'short_token': short_token,
                                'userFb': $scope.uFbs[index].user_facebook,
                                'passFb': $scope.uFbs[index].pass_facebook,
                                'idUser': $rootScope.user.id
                            })
                                .success(function (data) {
                                    console.log("Data Success", data);
                                })
                                .error(function (err) {
                                    console.log("error save token", err);
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
        $scope.isUsed = function (index) {
            var user_fb = $scope.uFbs[index];
            console.log("User FB", user_fb);
            $server.setUserFB(user_fb._id)
                .success(function (data) {
                    console.log("Set user facebook OK", data);
                })
                .error(function (err) {
                    console.log("Set user facebook Error:", err);
                })
        };

        $scope.removeFB = function (index) {
            var user_fb = $scope.uFbs[index];
            console.log(user_fb);
          $server.removeFB(user_fb.user_facebook)
              .success(function (data) {
                  $scope.uFbs.splice(index, 1);
                  console.log("Remove success user", data)
              })
              .error(function (err) {
                  console.log("error remove user", err)
              })
        };


        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
