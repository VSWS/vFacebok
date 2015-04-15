'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FanpageCtrl
 * @description
 * # FanpageCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('FanPageCtrl', function ($scope, $rootScope, $fb, $server, $timeout) {

        console.log("Controller: FanPage Loading");

        // Tiêu đề
        $rootScope.titleHeader = "FanPage";


        // Thiết lập các Tabs
        $scope.tabs = {
            selectedIndex: 0,
            tab2Locked: false,
            tab3Locked: false,
            tab4Locked: false,
            tab5Locked: true
        };
        $scope.nextTab = function () {
            $scope.tabs.selectedIndex = Math.min($scope.tabs.selectedIndex + 1, 2);
        };


        // 1. Load Campaign in Tab 1: Chien dich
        $scope.loadCampains = function () {
            // List Campaigns
            $scope.campaigns = [];
            $scope.selectedCampaign = {};
            return $timeout(function () {
                $server.getCampains()
                    .success(function (data) {
                        $scope.campaigns = data;
                        console.log("Campaigns: ", $scope.campaigns);
                    })
                    .error(function (err) {
                        $scope.status = 'Unable to load data:' + err;
                    });
            }, 500);
        };
        $scope.cacheIdCampaign = function (v) {
            $scope.idCampaign = v;
        };

        // 2. Xử lý tab: `Khởi Tạo`
        //console.log("FB Token:", $cookies.get('fbToken'));
        loadPages();
        function loadPages() {
            $server.getPages()
                .success(function (datas) {
                    $scope.pages = datas;
                    console.log(datas);
                })
                .error(function (err) {
                    $scope.status = err;
                    console.log(err);
                });
        }

        $scope.initPage = function (node) {
            console.log("Page Node", node);
            $server.initPage(node)
                .success(function (data) {
                    console.log("Data init Page:", data);
                    $scope.infoPage = data;
                })
                .error(function (err) {
                    console.log("err:", err);
                    $scope.status('Unable loading from server:', err);
                })
        };

        $scope.createPage = function (info) {
            var page = info;
            page.idCampaign = $scope.idCampaign;
            console.log('Campaign selected: ', page);
            $server.createPage(page)
                .success(function (data) {
                    console.log("Data", data);
                    if (data.message) {
                        $scope.status = data.message;
                    }
                })
                .error(function (err) {
                    console.log("Error", err);
                    $scope.status = err;
                });
        };

        /// Getting FEED
        $scope.feed = [];
        $scope.loadFeed = function (node, idPage) {
            console.log("Node:", node, "- idPage:", idPage);
            $server.getFeeds(node, idPage)
                .success(function (data) {
                    console.log("Data FEED:", data);
                    $timeout(function () {
                        console.log("Apply FEED!");
                        $scope.feed = data;
                        $scope.$apply()
                    },100);

                    })
                .error(function (err) {
                    console.log("Server error:", err)
                })
        };


    });
