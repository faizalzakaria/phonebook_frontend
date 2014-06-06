'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PhoneBookListCtrl', ['$scope', 'PhoneBooksFactory', 'PhoneBookFactory', '$location',
    function ($scope, PhoneBooksFactory, PhoneBookFactory, $location) {

      /* callback for ng-click 'editPhoneBook': */
      $scope.editPhoneBook = function (phoneBookId) {
        $location.path('/phoneBook-detail/' + phoneBookId);
      };

      /* callback for ng-click 'deletePhoneBook': */
      $scope.deletePhoneBook = function (phoneBookId) {
        PhoneBookFactory.delete({ id: phoneBookId });
        $scope.phoneBooks = PhoneBooksFactory.query();
      };

      /* callback for ng-click 'createPhoneBook': */
      $scope.createNewPhoneBook = function () {
        $location.path('/phoneBook-creation');
      };

      $scope.phoneBooks = PhoneBooksFactory.query();

    }])
  .controller('PhoneBookDetailCtrl', ['$scope', function($scope) {
  }])
  .controller('PhoneBookCreationCtrl', ['$scope', function($scope) {
  }]);
