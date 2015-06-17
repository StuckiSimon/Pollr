define(['voteView/namespace'], function(namespace) {
  return function(module) {
    module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $stateProvider.state('voteView', {
        url: '/voteView/:pollId',
        templateUrl: 'js/app/voteView/template/voteView.html',
        controller: namespace + '.voteViewController'
      });
    }]);
  };
});
