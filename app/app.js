'use strict';

// Declare app level module which depends on views, and components
angular.module('chatterbox', [
  'ngRoute',
  'chatterbox.view1',
  'chatterbox.view2',
  'chatterbox.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
