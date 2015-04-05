'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FanpageCtrl
 * @description
 * # FanpageCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('FanPageCtrl', function ($scope, $rootScope, CampaignFactory) {
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
    });
