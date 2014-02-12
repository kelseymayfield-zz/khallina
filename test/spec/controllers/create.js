'use strict';

xdescribe('Controller: CreateCtrl', function() {
  beforeEach(module('khallinaApp'));

  var ModCtrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ModCtrl = $controller('CreateCtrl', {
      $scope: scope
    });
  }));

  var module = {
    elem: {},
    intm: {},
    adv: {}
  };

  it('should set scope.module an object with elem, intm, and adv', function() {
    expect(scope.module).toEqual(module);
  });

  it('should set scope.module.elem to an empty object', function() {
    expect(scope.module.elem).toEqual({});
  });

  it('should set scope.module.intm to an empty object', function() {
    expect(scope.module.intm).toEqual({});
  });

  it('should set scope.module.adv to an empty object', function() {
    expect(scope.module.adv).toEqual({});
  });
});
