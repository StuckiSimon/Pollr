define([
  'shared/webServiceManager/namespace',
  'shared/webServiceManager/service/SessionManagementService',
  'shared/webServiceManager/factory/SessionContextWrapper',
  'shared/webServiceManager/service/PollManagementService',
  'shared/webServiceManager/config/setup'],
  function(namespace, sessionManagementService, sessionContextWrapper, pollManagementService, setup) {
    var module = angular.module(namespace, []);
    sessionManagementService(module);
    sessionContextWrapper(module);
    pollManagementService(module);
    setup(module);
  });
