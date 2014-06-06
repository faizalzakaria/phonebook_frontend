'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider.when('/phoneBook-list', {templateUrl: 'partials/phone_book-list.html', controller: 'PhoneBookListCtrl'});
  $routeProvider.when('/phoneBook-detail/:id', {templateUrl: 'partials/phone_book-detail.html', controller: 'PhoneBookDetailCtrl'});
    $routeProvider.when('/phoneBook-creation', {templateUrl: 'partials/phone_book-creation.html', controller: 'PhoneBookCreationCtrl'});
  $routeProvider.otherwise({redirectTo: '/phoneBook-list'});

  /* CORS... */
  /* http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api */
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
