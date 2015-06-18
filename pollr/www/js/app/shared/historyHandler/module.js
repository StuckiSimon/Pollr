define([
  'shared/historyHandler/namespace',
  'shared/historyHandler/directive/historyBack'],
  function(namespace, historyBack) {
    var module = angular.module(namespace, []);
    historyBack(module);
  });
