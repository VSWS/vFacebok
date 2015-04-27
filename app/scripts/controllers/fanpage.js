'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FanpageCtrl
 * @description
 * # FanpageCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('FanPageCtrl', function ($scope, $rootScope, $fb, $server, $timeout, $mdDialog) {

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
                $server.getCampains($rootScope.server)
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

        // 2. Xử lý tab: `FanPages`
        //console.log("FB Token:", $cookies.get('fbToken'));
        $scope.pages = [];
        $scope.totalUIDPage = 0;
        //loadPages();
        $scope.loadPages = function () {
            $server.getPages($rootScope.server)
                .success(function (datas) {
                    datas.forEach(function (data) {
                        $server.countPosts(data._id)
                            .success(function (count) {
                                $scope.pages.push({data: data, count: count});
                                $scope.totalUIDPage = $scope.totalUIDPage + count[0].hasUID;
                                console.log("List Page:", $scope.pages);
                            })
                    });
                })
                .error(function (err) {
                    $scope.status = err;
                    console.log(err);
                });
        };

        $scope.initPage = function (node) {
            console.log("Page Node", node);
            $server.initPage(node,$rootScope.server)
                .success(function (data) {
                    console.log("Data init Page:", data);
                    $scope.infoPage = data;
                })
                .error(function (err) {
                    console.log("err:", err);
                    $scope.status('Unable loading from server:', err);
                })
        };
        $scope.alert = '';

        $scope.createPage = function () {
            var page = $scope.infoPage;
            page.idCampaign = $scope.idCampaign;
            console.log('Campaign selected: ', $scope.idCampaign, page);
            $server.createPage(page, $rootScope.server)
                .success(function (data) {
                    console.log("Data", data._id);
                    $scope.getFeed($scope.infoPage.username, data._id);

                    autoLoad(data._id);

                    $scope.nextTab();
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

        function autoLoad(idPage) {
            $server.getPostsByPage(idPage, $rootScope.server)
                .success(function (data) {
                    console.log("Data Autoload:", data);
                    if (data) {
                        $scope.feed = data;
                        setTimeout(function () {
                            autoLoad(idPage);
                        }, 3000)
                    }

                })
                .error(function (err) {
                    console.log(err);
                })
        }
        $scope.showFeed = function (node, idPage) {
            console.log("Show Feed:", node, idPage);
            autoLoad(idPage);
        };

        var nodeCachingLoad; // check username ko bi duplicate trang
        $scope.getFeed = function (node, idPage) {
            console.log("Node:", node, "- idPage:", idPage);
            $server.getFeeds(node, idPage)
                .success(function (data) {
                    console.log("Data FEED:", data);
                    $scope.feed = data.data;
                    if ( node == nodeCachingLoad) {
                        autoLoad(idPage);
                    }

                })
                .error(function (err) {
                    console.log("Server error:", err)
                })
        };

        $scope.tokens = [];

        $scope.GetUid = function (idPost, totalLike, token) {
            console.log('Getting data ...', idPost, totalLike, token);
            $server.getUid(idPost, totalLike, token).success(function (data) {
                console.log(data);
            })
                .error(function (err) {
                    console.log(err);
                })
        };

        $scope.setLock = function (index) {
            var post = $scope.feed[index];
            $server.setLock(post.idPost)
                .success(function (data) {
                    console.log("set lock idPost", post.idPost, data);
                })
                .error(function (err) {
                    console.log("error set lock idPost", post.idPost, err)
                })
        };

        $scope.unLock = function (index) {
            var post = $scope.feed[index];
            $server.unLock(post.idPost)
                .success(function (data) {
                    console.log("set lock idPost", post.idPost, data);
                })
                .error(function (err) {
                    console.log("error set lock idPost", post.idPost, err)
                })
        };

        $scope.LoadMorePost = function(paging) {
            $server.loadmorePost(paging).success(function(morefeeds) {

                $scope.feed.paging.next = morefeeds.paging.next;
                morefeeds.data.forEach(function(ele) {
                    $scope.feed.data.push(ele);
                })
            })
        };

        $scope.loadUFB = function () {
            // List Campaigns
            $scope.UFBs = [];
            $scope.selectedUFB = [];

            return $timeout(function () {
                $server.getAllUFB()
                    .success(function (data) {
                        $scope.UFBs = data;
                        console.log("All UFB: ", $scope.UFBs);
                        console.log("Selected UFB", $scope.selectedUFB);
                    })
                    .error(function (err) {
                        $scope.status = 'Unable to load data:' + err;
                    });
            }, 500);
        };
    }
);
