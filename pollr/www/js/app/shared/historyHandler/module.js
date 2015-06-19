/**
 * History Handler is a simple history manager providing a directive and a service
 */
define([
  'shared/historyHandler/namespace',
  'shared/historyHandler/factory/HistoryService',
  'shared/historyHandler/directive/historyBack'],
  function(namespace, historyService, historyBack) {
    var module = angular.module(namespace, []);
    historyService(module);
    historyBack(module);
  });
