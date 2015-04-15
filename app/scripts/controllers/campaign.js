'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('CampaignCtrl', function ($scope, $rootScope, $mdDialog, $server) {
        $rootScope.titleHeader = "Chiến dịch";



        getCampains();

        function getCampains() {
            console.log("Running Test Get Campaign:");
            $server.getCampains()
                .success(function (data) {
                        $scope.campaigns = data;
                })
                .error(function (err) {
                    $scope.status = 'Unable to load data:' + err;
                });
        }

        $scope.removeCampaign = function (id) {
            console.log("ID remove:", id);
            $server.removeCampaign(id)
                .success(function (data) {
                    console.log("Remove success:", data);
                })
                .error(function (err) {
                    console.log('Unable to load data', err)
                })
        };

        $scope.createCampaign = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                {
                    controller: CreateCampaignCtrl,
                    templateUrl: '../views/partials/dialogCreateCampaign.html',
                    targetEvent: ev
                }
            );
        };

        function CreateCampaignCtrl($scope, $mdDialog, $server) {

            console.log("Dialog is enable;");

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.created = function (nameCampaign) {
                console.log("name Campaign:", nameCampaign);

                var obj = {
                    name: nameCampaign,
                    idUser: $rootScope.user.id
                };

                $server.createCampaign(obj);
                getCampains();

                $mdDialog.hide();
            };
        }

    });
