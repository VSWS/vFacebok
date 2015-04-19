'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.fbSDK
 * @description
 * # fbSDK
 * Service in the ifacebookApp.
 */
angular.module('ifacebookApp')
    .service('$fb', function ($rootScope, $http) {

        var AppId = '1583470488573133';

        return {

            init: function () {
                return (function (d, s, id) {
                    console.log('Facebook: Init SDK ');
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            },

            query: function (callback) {

                window.fbAsyncInit = function() {
                    FB.init({
                        appId      : AppId,
                        xfbml      : true,
                        version    : 'v2.3'
                    });
                    console.log("Run FB")
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            console.log('Logged in.');
                        }
                        else {
                            console.log("show login");
                            FB.login();
                        }
                    });
                    callback(FB);

                };

            }
        }
    });
