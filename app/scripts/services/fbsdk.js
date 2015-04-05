'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.fbSDK
 * @description
 * # fbSDK
 * Service in the ifacebookApp.
 */
angular.module('ifacebookApp')
    .service('$facebook', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var host = "https://graph.facebook.com",
            version = "/v2.3/",
            token = "CAACEdEose0cBAJDBFbfrLnlRp3vlzOrUDlJ1N5MXj0KZBf7TZCGdxahODEF8om7tsJGF8nFab3GIbO3RjXp5U2kxJUaxRMe3mpJzNdp1isivkGNEIgSd8gw5tZALykb06DzAOoy7gu1yqieDaI3X9XG8nvkKehWNENwYLBs6LAHnAgCrZA4TSBGSjxCI7OWmOHuvfHcElv0eeewaAIwR";

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        return {
            api : function (callback) {
                return window.fbAsyncInit = function() {
                    FB.init({
                        appId      : '405337779615879',
                        xfbml      : true,
                        version    : 'v2.3'
                    });
                    callback(FB);
                };
            }
        }
    });
