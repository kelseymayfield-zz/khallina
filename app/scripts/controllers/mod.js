angular.module('khallinaApp')
  .controller('ModCtrl', function ($scope, $location, $anchorScroll, Lesson, $routeParams, $sce, $modal) {
    'use strict';

    $scope.lesson = Lesson.get({lessonId: $routeParams.lessonId}, function() {
      var level = $routeParams.level;
      if (level === 'beginner') {
        $scope.module = $scope.lesson.beginner;
      } else if (level === 'intermediate') {
        $scope.module = $scope.lesson.intermediate;
      } else {
        $scope.module = $scope.lesson.advanced;
      }

      $scope.video1URL = $sce.trustAsResourceUrl($scope.module.video1);
      if($scope.module.video2) {
        $scope.video2URL = $sce.trustAsResourceUrl($scope.module.video2.url);
      }
      if($scope.module.video3) {
        $scope.video3URL = $sce.trustAsResourceUrl($scope.module.video3.url);
      }
      if ($scope.module.article1) {
        $scope.article1URL = $sce.trustAsResourceUrl($scope.module.article1.url);
      }
      if ($scope.module.article2) {
        $scope.article2URL = $sce.trustAsResourceUrl($scope.module.article2.url);
      }
      if ($scope.module.lastvideo) {
        $scope.lastVideoURL = $sce.trustAsResourceUrl($scope.module.lastvideo);
      }
      if ($scope.module.videos) {
        $scope.videos = $scope.module.videos;
        $scope.video = $scope.videos[0];
        $scope.carouselUrl = $sce.trustAsResourceUrl($scope.module.videos[0].url);
      }

      if ($scope.module.finalActivity) {
        $scope.finalActivity = $sce.trustAsHtml($scope.module.finalActivity.instructions);
      }
      $scope.htmlstuff = $sce.trustAsHtml($scope.module.htmlstuff);
      $scope.listeningSolutions = $sce.trustAsResourceUrl($scope.module.listeningSolutions);
      $scope.listeningQuestions = $sce.trustAsResourceUrl($scope.module.listeningQuestions);

      $scope.homeUrl = $sce.trustAsResourceUrl($scope.lesson.homepage);

      $scope.articleQuestions = {};
      for(var q in $scope.module.articleQuestions) {
        $scope.articleQuestions[q] = $sce.trustAsHtml($scope.module.articleQuestions[q]);
      }

      if ($scope.module.video2) {
        $scope.video2Questions = {};
        for(var v in $scope.module.video2.questions) {
          $scope.video2Questions[v] = $sce.trustAsHtml($scope.module.video2.questions[v]);
        }
      }

      if ($scope.module.video3) {
        $scope.video3Questions = {};
        for(var w in $scope.module.video3.questions) {
          $scope.video3Questions[w] = $sce.trustAsHtml($scope.module.video3.questions[w]);
        }
      }
    });

    $scope.araCollapse = false;
    $scope.boolChangeClass=false;

    $scope.open = function() {
      $modal.open({
        templateUrl: $scope.module.words,
        controller: function ($scope, $modalInstance) {
          $scope.ok = function() {
            $modalInstance.close();
          };
        }
      });
    };

    // $scope.close = function() {
    //   $scope.shouldBeOpen = false;
    // };

    $scope.openL1 = function() {
      $modal.open({
        templateUrl: $scope.module.listening,
        controller: function ($scope, $modalInstance) {
          $scope.ok = function() {
            $modalInstance.close();
          };
        }
      });
    };

    // $scope.closeL1 = function() {
    //   $scope.shouldBeOpenL1 = false;
    // };

    $scope.openV = function(myVideo) {
      $modal.open({
        templateUrl: 'views/videoModal.html',
        controller: function ($scope, $modalInstance, $sce, video) {
          $scope.video = video;

          $scope.videoUrl = $sce.trustAsResourceUrl('//youtube.com/embed/' + video.id);

          $scope.ok = function() {
            $modalInstance.close();
          };
        },
        resolve: {
          video: function() {
            return myVideo;
          }
        }
      });
    };


    $scope.click = function() {
      $scope.boolChangeClass = !$scope.boolChangeClass;
    };

    $scope.prevVideo = function() {
      if ($scope.video === $scope.videos[0]) {
        $scope.video = $scope.videos[$scope.videos.length-1];
      }
      else {
        $scope.video = $scope.videos[$scope.videos.indexOf($scope.video)-1];
      }
      console.log($scope.video);
      $scope.carouselUrl = $sce.trustAsResourceUrl($scope.video.url);
    };

    $scope.nextVideo = function() {
      if($scope.video === $scope.videos[$scope.videos.length-1]) {
        $scope.video = $scope.videos[0];
      }
      else {
        $scope.video = $scope.videos[$scope.videos.indexOf($scope.video)+1];
      }
      $scope.carouselUrl = $sce.trustAsResourceUrl($scope.video.url);
    };

    $scope.opts = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };
	})
  .controller('LessonCtrl', function ($scope) {
    'use strict';
    $scope.araCollapse = false;
  })
  .controller('InfoCtrl', function ($scope, Lesson, $routeParams) {
    'use strict';
    $scope.module = Lesson.get({lessonId:$routeParams.lessonId});
    $scope.app = {
      name: 'Mashrou3 Laila',
      id: 'mashrou3laila'
    };
  })
  .controller('PanelCtrl', function() {
})
  .controller('recipeCtrl', function($scope) {
    'use strict';
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
  })
  .controller('oneCtrl', function ($scope) {
    'use strict';
    $scope.images = [{'thumb': 'img1.jpg'},{'thumb': 'img2.jpg'},{'thumb': 'img3.jpg'},{'thumb': 'img4.jpg'},{'thumb': 'img5.jpg'},{'thumb': 'img6.jpg'},{'thumb': 'img7.jpg'},{'thumb': 'img8.jpg'}];
    $scope.list1 = [];
    angular.forEach($scope.images, function() {
      $scope.list1.push({});
    });
    $scope.list2 = [
      { 'title': 'شبابي', 'drag': true },
      { 'title': 'ثوري', 'drag': true },
      { 'title': 'تقليدي', 'drag': true },
      { 'title': 'ع الموضة', 'drag': true },
      { 'title': 'مُسَيـَّـس', 'drag': true },
      { 'title': 'إرهابي', 'drag': true },
      { 'title': 'بلا معنى', 'drag': true },
      { 'title': 'وطني', 'drag': true },
      { 'title': 'عالمي', 'drag': true },
      { 'title': 'غريب', 'drag': true },
      { 'title': 'هوية', 'drag': true }
    ];

    $scope.startCallback = function() {
      console.log('You started draggin');
    };

    $scope.stopCallback = function() {
      console.log('Why did you stop draggin me?');
    };

    $scope.dragCallback = function() {
      console.log('hey, look I`m flying');
    };

    $scope.dropCallback = function() {
      console.log('hey, you dumped me :-(');
    };

    $scope.overCallback = function() {
      console.log('Look, I`m over you');
    };

    $scope.outCallback = function() {
      console.log('I`m not, hehe');
    };
  });