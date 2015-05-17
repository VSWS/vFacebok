'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.server
 * @description
 * # server
 * Service in the ifacebookApp.
 */
angular.module('ifacebookApp')
    .service('$server', function ($http, $mdDialog, $rootScope) {
        // AngularJS will instantiate a singleton by calling "new" on this functio

        var host = "http://localhost:3000"; //"http://45.55.177.53:3000";
        $rootScope.server = host;
        var server = {};

        // Check Server
        server.checkServer = function () {
            return $http.get(host)
                .success(function (data) {
                    console.log("Server OK:", data);
                })
                .error(function (err) {
                    console.log("Server Error:", err)
                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('Thông báo')
                            .content('Không thể kết nối tới Server: ' + host + '. Vui lòng liên hệ Support!')
                            .ok('Got it!')
                    );
                });
        };

        // Long Token
        server.setLongToken = function (data) {
            this.checkServer();
            return $http.post(host + '/setLongToken', data);
        };
        server.removeLongToken = function (data) {
            this.checkServer();
            return $http.post(host + '/removeLongToken', data);
        };
        server.getLongToken = function (idUser) {
            this.checkServer();
            return $http.get(host + '/getLongToken?idUser=' + idUser);
        };
        server.getAllUFB = function () {
            this.checkServer();
            return $http.get(host + '/getAllFB');
        };
        server.getUFB = function (idUser) {
            this.checkServer();
            return $http.get(host + '/getUFB?idUser=' + idUser);
        };
        server.setUserFB = function (id) {
            this.checkServer();
            return $http.get(host + '/setUserFB?id=' + id);
        };
        server.removeFB = function (user) {
            this.checkServer();
            return $http.get(host + '/removeFB?user_facebook=' + user);
        };

        // Campaign Service:
        server.getCampains = function () {
            this.checkServer();
            return $http.get(host + '/campaign');
        };
        server.getCampaign = function (id) {
            this.checkServer();
            return $http.get(host + '/campaign?id=' + id);
        };
        server.createCampaign = function (data) {
            this.checkServer();
            return $http.post(host + '/campaign', data);
        };
        server.updateCampaign = function (data) {
            this.checkServer();
            return $http.put(host + '/campaign', data);
        };
        server.removeCampaign = function (id) {
            this.checkServer();
            return $http.get(host + '/campaign/remove?id=' + id);
        };

        // FanPage Service:
        server.getPages = function () {
            this.checkServer();
            return $http.get(host + '/page')
        };
        server.getPage = function (id) {
            this.checkServer();
            return $http.get(host + '/page?id=' + id);
        };
        server.initPage = function (node) {
            this.checkServer();
            return $http.get(host + '/page/initPage?node=' + node);
        };
        server.createPage = function (data) {
            this.checkServer();
            return $http.post(host + '/page', data);
        };
        server.updatePage = function (data) {
            this.checkServer();
            return $http.put(host + '/page', data);
        };
        server.removePage = function (id) {
            this.checkServer();
            return $http.post(host + '/page/remove?id=' + id);
        };



        // Post Service:
        server.getFeeds = function (node, idPage) {
            this.checkServer();
            return $http.get(host + '/post/getFeed?node=' + node + '&idPage=' + idPage);
        };
        server.updateFeed = function (node, idPage) {
            this.checkServer();
            return $http.get(host + '/post/updateFeed?node=' + node + '&idPage=' + idPage);
        }
        server.getPosts = function () {
            this.checkServer();
            return $http.get(host + '/post');
        };
        server.getPostsByPage = function (idPage) {
            this.checkServer();
            return $http.get(host + '/post/getPostsByPage?idPage=' + idPage);
        };
        server.getPost = function (id) {
            this.checkServer();
            return $http.get(host + '/post/' + id);
        };
        server.createPost = function (data) {
            this.checkServer();
            return $http.post(host + '/post', data);
        };
        server.updatePost = function (data) {
            this.checkServer();
            return $http.put(host + '/post', data);
        };
        server.removePost = function (id) {
            this.checkServer();
            return $http.post(host + '/post/remove?id=' + id);
        };
        server.setLock = function (id) {
            this.checkServer();
            return $http.get(host + '/post/setLock?id=' + id);
        };
        server.unLock = function (id) {
            this.checkServer();
            return $http.get(host + '/post/unLock?id=' + id);
        };
        server.countPosts = function (id) {
            return $http.get(host + '/post/countUidPage?id=' + id);
        };



        // Get UID each post
        server.getUid = function (idpost, ttlike, token) {
            this.checkServer();
            return $http.get(host + '/uid/saveuid/' + idpost + '/' + ttlike + '/' + token);
        };
        server.autoGetUID = function (page) {
            this.checkServer();
            return $http.get(host + '/uid/autoGetUid?page='+page);
        };
        server.getFiltedUID = function (page) {
            this.checkServer();
            return $http.get(host + '/uid/autoFiltedUids?page='+page);
        };
        server.getInfo = function (page) {
            this.checkServer();
            return $http.get(host + '/uid/getInfos?page='+page);
        };

        // Load more post
        server.loadmorePost = function (paging) {
            return $http.post(host + '/post/morefeed', {paging: paging});
        }

        return server;
    });
