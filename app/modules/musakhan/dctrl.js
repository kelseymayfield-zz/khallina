var DCtrl = function($scope) {
	$scope.list1 = [
		{ 'title': 'ﻧﻀﻊ قطع اﻠﺪﺟﺎﺝ ﻋﻠﻰ الأرغفة ﻭﻧﺮﺷﻬﺎ ﺑﺎﻟﺼﻨﻮﺑﺮ', 'drag': 'true', 'id': 'i' },
		{ 'title': 'نغطـّي الدجاج بطبقة من زيت زيتون', 'drag': 'true', 'id': 'c' },
		{ 'title': 'نضع الدجاج في الماء مع البهارات', 'drag': 'true', 'id': 'a' },
		{ 'title': 'نطبخ البصل المفروم بزيت الزيتون والسماق', 'drag': 'true', 'id': 'e' },
		{ 'title': 'نخبز العجينة بعد فردها بشكل دائري', 'drag': 'true', 'id': 'g' },
		{ 'title': 'نجهز عجينة الخبز ونتركها للتخمير', 'drag': 'true', 'id': 'f' },
		{ 'title': 'نضع الدجاج في الفرن', 'drag': 'true', 'id': 'd' },
		{ 'title': 'ﺻﺤﺘﻴﻦ!!!', 'drag': 'true', 'id': 'l' },
		{ 'title': 'نسلق الدجاج', 'drag': 'true', 'id': 'b' },
		{ 'title': 'ﻧﻠﻒ ﻛﻞ ﺭﻏﻴﻒ ﻣﺜﻞ ﺳﻨﺪﻭﻳﺸﺔ', 'drag': 'true', 'id': 'j' },
		{ 'title': 'ﻧﻮﺯﻉ ﺧﻠﻴﻂ ﺍﻟﺒﺼﻞ ﻭﺍﻟﺰﻳﺖ والسماق ﻋﻠﻰ الرغيف', 'drag': 'true', 'id': 'h' },
		{ 'title': 'ﺰﻳﻦ ﺍﻟﺴﻨﺪﻭﻳﺸﺎﺕ ﺑﺼﻨﻮﺑﺮ', 'drag': 'true', 'id': 'k' }
	];

	this.dropCallback = function(event, ui, title, $index) {
          if ($scope.list1.map(function(item) { return item.id; }).join('') === 'abcdefghijkl') {
            $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
          }
        };

    $scope.startCallback = function() {
      console.log('You started draggin');
    };
}