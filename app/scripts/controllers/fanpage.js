'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FanpageCtrl
 * @description
 * # FanpageCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('FanPageCtrl', function ($scope, $rootScope, CampaignFactory, $facebook) {
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
        var token = token = "CAACEdEose0cBAJDBFbfrLnlRp3vlzOrUDlJ1N5MXj0KZBf7TZCGdxahODEF8om7tsJGF8nFab3GIbO3RjXp5U2kxJUaxRMe3mpJzNdp1isivkGNEIgSd8gw5tZALykb06DzAOoy7gu1yqieDaI3X9XG8nvkKehWNENwYLBs6LAHnAgCrZA4TSBGSjxCI7OWmOHuvfHcElv0eeewaAIwR";

        $facebook.api(function (fb) {
            fb.api("/me", "get", {
                access_token : token
            }, function (res) {
                console.log("Data Facebook:", res);
            })
        });
    });
