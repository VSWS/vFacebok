'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FanpageCtrl
 * @description
 * # FanpageCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('FanPageCtrl', function ($scope, $rootScope, CampaignFactory, $fb) {
        $rootScope.titleHeader = "FanPage";


        $scope.campaigns = CampaignFactory.datas;
        $scope.changeValue = function (value) {
            if(value) {
            console.log(value);
            }else{
                console.log("chua co");
            }
        };

        // Implement Tabs
        $scope.tabs = {
            selectedIndex : 0,
            tab2Locked : false,
            tab3Locked : false,
            tab4Locked : false,
            tab5Locked : true
        };
        $scope.nextTab = function() {
            $scope.tabs.selectedIndex = Math.min($scope.tabs.selectedIndex + 1, 2) ;
        };

        // Implement tab: Khoi tao
        $scope.initUrl = undefined;
        var token = token = "CAACEdEose0cBAL0ZCpbDHTu8kpMFhzfN7fuUsx60LqlYRAfiQdACLLyw8WmqvfZCo5Y8VmFU3iYc8D4TPYtJIuc18Y1I9fofUqEqVpQdVukWmSx1Gxvq8bZBxXZCr0WnJjZA5jkkA5pKbHoF6VOL7TuFCAfERC1ZCOz1cvRF65dQ21LP9iUm73xzGfIVx5pHMsIPtViGqY4hyA27R9a411";

        $fb.api(function (fb) {
            fb.api("/me", "get", {
                access_token : token
            }, function (res) {
                console.log("Data Facebook:", res);
            })
        });
    });
