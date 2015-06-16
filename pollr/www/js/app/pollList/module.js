define(['pollList/namespace', 'pollList/controller/PollListController', 'pollList/config/setup'], function(namespace, pollListController, setup) {
  var module = angular.module(namespace, ["ionic"]);
  pollListController(module);
  setup(module);
});
