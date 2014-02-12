var DialectCtrl = function($scope) {
	$scope.count = 0;
	$scope.rightDisable = true;
	$scope.add = function() {
		if ($scope.count === $scope.list1.length-1) {
			$scope.leftDisable = true;
		} else {
			$scope.count++;
			$scope.rightDisable = false;
		}
	};

	$scope.subtract = function() {
		if ($scope.count === 0) {
			$scope.rightDisable = true;
		} else {
			$scope.count--;
			$scope.leftDisable = false;
		}
	};

	$scope.list1 = [
		{title: "ينفجروا من الفرحة"},
		{title: "حتخلي السياح يموتوا في حب مصر"},
		{title: "ليه تكسروا بخاطر الراجل؟"},
		{title: "أنا الحقيقة متوغوش على شعبية الرئيس"},
		{title: "الواحد بصراحة كان بيتضايق"},
		{title: "قلقي زاد"},
		{title: "أصعب حاجة إن الواحد يحس إنه مش محبوب، مرفوض"},
		{title: "هو كان مبسوط ومتفائل كعادته"},
		{title: "حسيت بشعبيتي"},
		{title: "إحساس الشعبية المزيفة دي جميل جدا"},
		{title: "الواحد بيحتاج إن هو يحس إن هو عنده ثقة وشعبية ومسيطر"}
	];

	$scope.pos = [];

	$scope.neg = [];

	$scope.list3 = {title: 'DRAG IT'};
	$scope.list2 = {};
}