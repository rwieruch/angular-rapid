'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
      'ngRoute',
      'myApp.tweet'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix(); // Removes index.html in URL

    $routeProvider.otherwise({redirectTo: '/tweets'});
}]);
