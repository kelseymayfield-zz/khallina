var DragCtrl = function($scope) {
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
		{title: "غياب المحاكمات العادلة"},
		{title: "غياب حقوق الفقراء والمهمشين"},
		{title: "انعدام حرية التعبير"},
		{title: "صعوبة تأسيس بيت للزواج"},
		{title: "عدم السماح بالتظاهر السلمي"},
		{title: "انعدام الخدمات الاجتماعية الأساسية"},
		{title: "العيش تحت خط الفقر"},
		{title: "عدم التوازن بين الأجور والأسعار"},
		{title: "انتشار الفساد والرشاوي"},
		{title: "انتشار الاعتقالات التعسفية"},
		{title: "القمع والعنف البوليسي"},
		{title: "المماطلة في المحاكمات المدنية"},
		{title: "الانحياز لمصالح الأغنياء وأصحاب السلطة على حساب أفراد المجتمع"},
		{title: "ارتفاع تكاليف المعيشة"},
		{title: "ارتفاع نسبة البطالة"},
		{title: "انعدام حرية التعبير"},
		{title: "الفروق الطبقية بين أفراد المجتمع"},
		{title: "غياب حقوق الأقليات"}
	];

	$scope.list2 = [];
	$scope.list3 = [];
	$scope.list4 = [];
}