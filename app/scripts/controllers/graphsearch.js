'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:GrapsearchCtrl
 * @description
 * # GrapsearchCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('GraphSearchCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Graph Search";

      var tabs = [
            {title: 'Chiến dịch', content: "Lựa chọn Chiến dịch bạn sẽ thực hiện lấy uID Facebook"},
            {title: 'Khởi tạo', content: "Nhập đường link "},
            {
              title: 'Phân tích',
              content: "You can bind the selected tab via the selected attribute on the md-tabs element."
            },
            {title: 'Xử lý', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
            {title: 'Kết quả', content: "If you remove a tab, it will try to select a new one."}
          ],
          selected = null,
          previous = null;
      $scope.tabs = tabs;
      $scope.selectedIndex = 0;
      $scope.$watch('selectedIndex', function (current, old) {
        previous = selected;
        selected = tabs[current];
        if (old && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
        if (current)                $log.debug('Hello ' + selected.title + '!');
      });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
