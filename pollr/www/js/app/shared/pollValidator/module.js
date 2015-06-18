define([
  'shared/pollValidator/namespace',
  'shared/pollValidator/factory/Validator'],
  function(namespace, validator) {
    var module = angular.module(namespace, []);
    validator(module);
  });
