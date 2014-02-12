angular.module('khallinaApp').controller('ModalCtrl', function($scope, $modal) {
  'use strict';
  $scope.open = function () {
    $modal.open({
      templateUrl: 'myModalContent.html',
      controller: function ($scope, $modalInstance) {
        $scope.ok = function () {
          $modalInstance.close();
        };

        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      }
    });
  };
});