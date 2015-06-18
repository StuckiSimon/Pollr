define(['addPollView/namespace', 'addPollView/controller/AddPollViewController', 'addPollView/config/setup', '../shared/pollValidator/namespace'], function(namespace, addPollViewController, setup, pollValidator) {
  var module = angular.module(namespace, ["ionic", pollValidator]);
  addPollViewController(module);
  setup(module);
});
