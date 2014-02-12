'use strict';

angular.module('khallinaApp')
	.controller('recipeCtrl', function($scope) {
		$scope.list1 = [
	      { 'id': 'd', 'title': 'Salt & Pepper', 'drag': true },
	      { 'id': 'h', 'title': 'Olive Oil', 'drag': true },
	      { 'id': 'e', 'title': 'Green Mint', 'drag': true },
	      { 'id': 'f', 'title': 'Chopped Onion', 'drag': true },
	      { 'id': 'a', 'title': 'Chopped Tomatoes', 'drag': true },
	      { 'id': 'b', 'title': 'Chopped Parsley', 'drag': true },
	      { 'id': 'g', 'title': 'Lemon', 'drag': true },
	      { 'id': 'c', 'title': 'Bulgar', 'drag': true }
	    ];
	  this.dropCallback = function() {
	    if ($scope.list1.map(function(item) { return item.id; }).join('') === 'abcdefgh') {
	      $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
	    }
	  };
	});