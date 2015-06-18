define(['addPollView/namespace', 'addPollView/controller/AddPollViewController', 'addPollView/config/setup'], function(namespace, addPollViewController, setup) {
  var module = angular.module(namespace, ["ionic"]);
  addPollViewController(module);
  setup(module);
});
