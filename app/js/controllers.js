'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PhoneBookListCtrl', ['$scope', 'PhoneBooksFactory', 'PhoneBookFactory', '$location',
    function ($scope, PhoneBooksFactory, PhoneBookFactory, $location) {

      $scope.editPhoneBook = function (phoneBookId) {
        $location.path('/phoneBook-detail/' + phoneBookId);
      };

      $scope.deletePhoneBook = function (phoneBookId) {
        PhoneBookFactory.delete({ id: phoneBookId });
        $scope.phoneBooks = PhoneBooksFactory.query();
      };

      $scope.createNewPhoneBook = function () {
        $location.path('/phoneBook-creation');
      };

      $scope.phoneBooks = PhoneBooksFactory.query();

    }])
  .controller('PhoneBookDetailCtrl', ['$scope', '$routeParams', 'PhoneBookFactory', '$location',
    function ($scope, $routeParams, PhoneBookFactory, $location) {

    $scope.updatePhoneBook = function () {
      PhoneBookFactory.update({id: $routeParams.id}, $scope.phoneBook);
      $location.path('/phoneBook-list');
    };

    $scope.cancel = function () {
      $location.path('/phoneBook-list');
    };

    $scope.phoneBook = PhoneBookFactory.show({id: $routeParams.id});

  }])
  .controller('PhoneBookCreationCtrl', ['$scope', '$routeParams', 'PhoneBooksFactory', '$location',
    function ($scope, $routeParams, PhoneBooksFactory, $location) {

    $scope.createNewPhoneBook = function () {
      PhoneBooksFactory.create($scope.phoneBook);
      $location.path('/phoneBook-list');
    }
  }]);
