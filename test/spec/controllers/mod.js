'use strict';

describe('Controller: ModCtrl', function() {
  beforeEach(module('khallinaApp'));

  var ModCtrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ModCtrl = $controller('ModCtrl', {
      $scope: scope
    });
  }));
});
