define(['pollList/namespace'], function(namespace) {
  return function(module) {
    module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $stateProvider.state('pollList', {
        url: '/pollList',
        templateUrl: 'js/app/pollList/template/pollList.html',
        controller: namespace + '.pollListController'
      });
    }]);
  };
});
