'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.CampaignFactory
 * @description
 * # CampaignFactory
 * Factory in the ifacebookApp.
 */
angular.module('ifacebookApp')
  .factory('CampaignFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      datas: [
        {name:'Thời trang Nam', value:'thoi-trang-nam'},
        {name:'Thời Trang Nữ', value:'thoi-trang-nu'},
        {name:'Đào tạo công nghệ', value:'dao-tao-cong-nghe'},
        {name:'Bất động sản', value:'bat-dong-san'},
        {name:'Đồng hồ', value: 'dong-ho'},
        {name:'Iphone', value:'iphone'}
      ],
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
