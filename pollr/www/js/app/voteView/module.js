define(['voteView/namespace', 'voteView/controller/VoteViewController', 'voteView/config/setup'], function(namespace, voteViewController, setup) {
  var module = angular.module(namespace, ["ionic"]);
  voteViewController(module);
  setup(module);
});
