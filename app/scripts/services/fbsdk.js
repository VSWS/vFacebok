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

        return {
            getAppId: function (appId) {
                return appId;
            },

            init: function (appId) {

                if(appid === undefined) {
                    console.log("Facebook not found AppID!!! pls check!")
                }else{
                    this.getAppId(appId);
                }

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
                        appId      : this.getAppId,
                        xfbml      : true,
                        version    : 'v2.3'
                    });
                    callback(FB);
                };
            }
        }
    });
