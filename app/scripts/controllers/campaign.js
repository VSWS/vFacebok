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

        $scope.campaigns = [];

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

        $scope.removeCampaign = function (index) {
            console.log("ID remove:", index);
            var campaign_delete = $scope.campaigns[index];
            $server.removeCampaign(campaign_delete._id)
                .success(function (data) {
                    console.log("Remove success:", data);
                    $scope.campaigns.splice(index, 1);
                })
                .error(function (err) {
                    console.log('Unable to load data', err)
                })
        };

        $scope.createCampaign = function () {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog

            var obj = {
                name: $scope.nameCampaign,
                idUser: $rootScope.user.id
            };

            console.log("Campaigns:", $scope.campaigns);
            $scope.campaigns.push(obj);
            $server.createCampaign(obj);
            $scope.nameCampaign = '';

        };



    });
