define(['addPollView/namespace'], function(namespace) {
  return function(module) {
    module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $stateProvider.state('addPollView', {
        url: '/addPollView',
        templateUrl: 'js/app/addPollView/template/addPollView.html',
        controller: namespace + '.addPollViewController'
      });
    }]);
  };
});
