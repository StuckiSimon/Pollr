/**
 * Poll Validator, provides validation utility for polls
 */
define([
  'shared/pollValidator/namespace',
  'shared/pollValidator/factory/Validator'],
  function(namespace, validator) {
    var module = angular.module(namespace, []);
    validator(module);
  });
