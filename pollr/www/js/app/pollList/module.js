/**
 * Poll List, main entry point for user, lists polls and routes to next views
 */
define(['pollList/namespace', 'pollList/controller/PollListController', 'pollList/config/setup'], function(namespace, pollListController, setup) {
  var module = angular.module(namespace, ["ionic"]);
  pollListController(module);
  setup(module);
});
