'use strict';

angular.module('khallinaApp')
  .controller('MainCtrl', function ($scope, Lesson, $location, $anchorScroll) {
    $scope.lessons = Lesson.query({lessonId: 'modules'}, function() {
        $scope.randLessons = [
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)],
          $scope.lessons[Math.floor(Math.random()*$scope.lessons.length)]
        ];
      });

    $scope.beginner = Lesson.query({lessonId: 'beginner'});
    $scope.intermediate = Lesson.query({lessonId: 'intermediate'});
    $scope.advanced = Lesson.query({lessonId: 'advanced'});

    $scope.changeDemo = function(newDemo) {
        $scope.demo = Lesson.get({lessonId: newDemo.id}, function(){
            $scope.demo.level = newDemo.level;
          });
      };

    $scope.scrollTo = function(newDemo, id) {
        $scope.changeDemo(newDemo);
        console.log($location.hash());
        $location.hash(id);
        $anchorScroll();
      };
  });