'use strict';

/**
 * @ngdoc overview
 * @name ifacebookApp
 * @description
 * # ifacebookApp
 *
 * Main module of the application.
 */
var app = angular
    .module('ifacebookApp', [
        'ngAnimate',
        'ui.router',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'btford.socket-io',
        'facebook'
    ]);

app.config(function ($stateProvider, $urlRouterProvider, $mdIconProvider, FacebookProvider) {

    $urlRouterProvider.otherwise('/campaign');

    // Setup State
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('campaign', {
            url: '/campaign',
            templateUrl: "/views/campaign.html",
            controller: 'CampaignCtrl'
        })
        .state('graphSearch', {
            url: '/graphsearch',
            templateUrl: 'views/grapSearch.html',
            controller: 'GraphSearchCtrl'
        })
        .state('fanPage', {
            url: '/fanPage',
            templateUrl: 'views/fanPage.html',
            controller: 'FanPageCtrl'
        })
        .state('group', {
            url: '/group',
            templateUrl: 'views/group.html',
            controller: 'GroupCtrl'
        })
        .state('website', {
            url: '/website',
            templateUrl: 'views/website.html',
            controller: 'WebsiteCtrl'
        })
        .state('friend', {
            url: '/friend',
            templateUrl: 'views/friend.html',
            controller: 'FriendCtrl'
        })
        .state('friendFollow', {
            url: '/friendFollow',
            templateUrl: 'views/friendFollow.html',
            controller: 'FriendFollowCtrl'
        })
        .state('event', {
            url: '/event',
            templateUrl: 'views/event.html',
            controller: 'EventCtrl'
        })
        .state('map', {
            url: '/map',
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'views/settings.html',
            controller: 'SettingsCtrl'
        })
        .state('test', {
            url: '/test',
            templateUrl: 'views/test.html',
            controller: 'TestCtrl'
        });

    // Load ICON
    $mdIconProvider
        .icon('menu', 'images/svg/ic_menu_24px.svg')
        .icon('chiendich', 'images/svg/ic_assignment_24px.svg')
        .icon('thietlap', 'images/svg/ic_settings_applications_24px.svg')
        .icon('thoat', 'images/svg/ic_keyboard_return_24px.svg')
        .icon('graph', 'images/svg/ic_trending_up_24px.svg')
        .icon('fanpage', 'images/svg/ic_find_in_page_24px.svg')
        .icon('group', 'images/svg/ic_group_work_24px.svg')
        .icon('website', 'images/svg/ic_devices_24px.svg')
        .icon('friend', 'images/svg/ic_account_child_24px.svg')
        .icon('friendFollow', 'images/svg/ic_group_add_24px.svg')
        .icon('event', 'images/svg/ic_event_available_24px.svg')
        .icon('map', 'images/svg/ic_map_24px.svg')
        .icon('user', 'images/svg/ic_account_circle_24px.svg')

    FacebookProvider.init('1583470488573133');

}).run(function ($mdSidenav, $rootScope, $log, $server) {

    // Info User
    $rootScope.user = {
        id: '55226b73529523560a73f96d',
        username: 'tung',
        token: 'abcde'
    };


    /*$server.getLongToken($rootScope.user.id)
        .success(function (data) {
            console.log("DATA APP:", data);
            if (data.hasOwnProperty('status')) {
                $fb.query(function (FB) {
                    FB.getLoginStatus(function (response) {
                        if (response.status === 'connected') {
                            console.log('Facebook: Logged in.');
                            var uid = response.authResponse.userID;
                            var accessToken = response.authResponse.accessToken;
                            console.log("Access Token", accessToken, uid);
                            $server.setLongToken({'token': accessToken, idUser: $rootScope.user.id})
                                .success(function (data) {
                                    console.log("Save status:", data);
                                })
                                .error(function (err) {
                                    console.log("Error status:", err);
                                });
                        }
                        else {
                            FB.login();
                            $state.go($state.current, {}, {reload: true});
                        }

                    });
                });


            } else {

            }

        })
        .error(function (err) {
            console.log("Error get long token:", err)
        });
*/



    // Implement toggle Menu
    $rootScope.toggleLeft = function () {
        $mdSidenav('leftMenu').toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    };
});

// Progress: Left Menu Controller
app
    .controller('LeftMenuCtrl', function ($scope, $timeout, $mdSidenav, $log, $state) {
        $scope.settings = [
            {name: 'Chiến dịch', icon: 'chiendich', link: 'campaign'},
            {name: 'Graph Search', icon: 'graph', link: 'graphSearch'},
            {name: 'FanPage', icon: 'fanpage', link: 'fanPage'},
            {name: 'Nhóm', icon: 'group', link: 'group'},
            {name: 'Website', icon: 'website', link: 'website'},
            {name: 'Bạn bè', icon: 'friend', link: 'friend'},
            {name: 'Bạn bè Follow', icon: 'friendFollow', link: 'friendFollow'},
            {name: 'Sự kiện', icon: 'event', link: 'event'},
            {name: 'Vị trí', icon: 'map', link: 'map'},
            {name: 'Thiết lập', icon: 'thietlap', link: 'settings'},
            {name: 'Thoát', icon: 'thoat', link: 'logout'}
        ];
        $scope.goState = function (link) {
            $state.go(link);
        };
        $scope.close = function () {
            $mdSidenav('leftMenu').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });

