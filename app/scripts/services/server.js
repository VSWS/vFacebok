'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.server
 * @description
 * # server
 * Service in the ifacebookApp.
 */
angular.module('ifacebookApp')
    .service('$server', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this functio

        var host = "http://localhost:3000";

        var server = {};

        // Long Token
        server.setLongToken = function (data) {
            return $http.post(host + '/setLongToken', data);
        };
        server.removeLongToken = function (data) {
            return $http.post(host + '/removeLongToken', data);
        };
        server.getLongToken = function (idUser) {
            return $http.get(host + '/getLongToken?idUser=' + idUser);
        };
        server.getUFB = function (idUser) {
            return $http.get(host + '/getUFB?idUser=' + idUser);
        }

        // Campaign Service:
        server.getCampains = function () {
            return $http.get(host + '/campaign');
        };
        server.getCampaign = function (id) {
            return $http.get(host + '/campaign?id=' + id);
        };
        server.createCampaign = function (data) {
            return $http.post(host + '/campaign', data);
        };
        server.updateCampaign = function (data) {
            return $http.put(host + '/campaign', data);
        };
        server.removeCampaign = function (id) {
            return $http.post(host + '/campaign/remove?id=' + id);
        };

        // FanPage Service:
        server.getPages = function () {
            return $http.get(host + '/page')
        };
        server.getPage = function (id) {
            return $http.get(host + '/page?id=' + id);
        };
        server.initPage = function (node) {
            return $http.get(host + '/page/initPage?node=' + node);
        };
        server.createPage = function (data) {
            return $http.post(host + '/page', data);
        };
        server.updatePage = function (data) {
            return $http.put(host + '/page', data);
        };
        server.removePage = function (id) {
            return $http.post(host + '/page/remove?id=' + id);
        };

        // Post Service:
        server.getFeeds = function (node, idPage) {
            return $http.get(host + '/post/getFeed?node=' + node + '&idPage=' + idPage);
        };
        server.getPosts = function () {
            return $http.get(host + '/post');
        };
        server.getPost = function (id) {
            return $http.get(host + '/post/' + id);
        };
        server.createPost = function (data) {
            return $http.post(host + '/post', data);
        };
        server.updatePost = function (data) {
            return $http.put(host + '/post', data);
        };
        server.removePost = function (id) {
            return $http.post(host + '/post/remove?id=' + id);
        };

        // Get UID each post
        server.getUid = function(idpost, ttlike) {
            return $http.get(host + '/uid/saveuid/' + idpost + '/' + ttlike);
        }

        return server;
    });
