define(['detailView/namespace', 'detailView/controller/DetailViewController', 'detailView/config/setup'], function(namespace, detailViewController, setup) {
  var module = angular.module(namespace, ["ionic"]);
  detailViewController(module);
  setup(module);
});
