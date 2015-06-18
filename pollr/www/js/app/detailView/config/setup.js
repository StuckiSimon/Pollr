define(['detailView/namespace'], function(namespace) {
  return function(module) {
    module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $stateProvider.state('detailView', {
        url: '/detailView/:pollId&:pollTitle',
        templateUrl: 'js/app/detailView/template/detailView.html',
        controller: namespace + '.detailViewController'
      });
    }]);
  };
});
