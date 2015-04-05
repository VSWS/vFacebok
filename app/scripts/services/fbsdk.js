'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.fbSDK
 * @description
 * # fbSDK
 * Service in the ifacebookApp.
 */
angular.module('ifacebookApp')
    .service('$fb', function () {

        var AppId;

        return {
            setAppId: function (id) {
                AppId = id;
                return id;
            },
            getAppId : function () {
                return AppId;
            },
            init: function () {
                return (function(d, s, id){
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {return;}
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            },

            api : function (callback) {
                return window.fbAsyncInit = function() {

                    FB.init({
                        appId      : AppId,
                        xfbml      : true,
                        version    : 'v2.3'
                    });

                    callback(FB);
                };
            }
        }
    });
