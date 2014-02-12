angular.module('khallinaApp').controller('DemoCtrl', function($scope, $location) {
	'use strict';
	$scope.loc = $location.hash();
	if ($scope.loc==='') {
		$scope.loc='intro';
	}

	$scope.goTo = function(dest) {
		$scope.loc = dest;
		$scope.hash(dest);
	};

	$scope.alerts = [{type: 'warning', msg:'Use the navigation bar to explore the module'}];

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.isActive = function(viewLocation) {
		console.log($location.hash());
		return viewLocation === $location.hash();
	};
});