'use strict';

angular.module('khallinaApp', ['ui.bootstrap', 'ngTouch', 'firebase', 'ngRoute', 'lessonServices', 'ngSanitize', 'ngDragDrop', 'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.affix', 'ui.bootstrap.tooltip', 'mgcrea.ngStrap.navbar'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/us', {
        templateUrl: 'views/about us.html'
      })
      .when('/about', {
        templateUrl: 'views/khallina.html'
      })
      .when('/module/:lessonId', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/module/:lessonId/:level', {
        templateUrl: 'views/module.html',
        controller: 'ModCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'CreateCtrl'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl',
        reloadOnSearch:false
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .value('fbURL', 'https://khallina.firebaseio.com')
  .factory('Lessons', function(angularFireCollection, fbURL) {
    return angularFireCollection(fbURL);
  })
  .directive('editInPlace', function() {
    return {
      restrict: 'A',
      scope: { value:'=editInPlace'},
      template: '<span ng-click="edit()" ng-bind="value" ng-hide="editing"></span><input ng-show="editing||!value" ng-model="value" ng-blur="editing=false">',
      link: function ($scope, elem) {
        var inputElement = angular.element(elem.children()[1]);
        elem.addClass('edit-in-place');
        $scope.editing = true;
        $scope.edit = function() {
          $scope.editing = true;
          elem.addClass('active');
          inputElement[0].focus();
        };

        inputElement.prop('onblur', function() {
          $scope.editing = false;
          elem.removeClass('active');
        });

        inputElement.prop('onfocus', function() {
          $scope.editing = true;
          elem.addClass('active');
        });
      }
    };
  })
  .directive('ngBlur', function() {
    return function( scope, elem, attrs ) {
      elem.bind('blur', function() {
        scope.$apply(attrs.ngBlur);
      });
    };
  })
  .directive('backImage', function() {
    return function(scope, element, attrs) {
      attrs.$observe('backImage', function(value) {
        element.css({
          'background-image': 'url(' + value + ')'
        });
      });
    };
  })
  .directive('pageslide', function () {

        //var defaults = {};
        //var str_inspect_hint = 'Add testing="testing" to inspect this object';

        /* Return directive definition object */

        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            scope: {},
            link: function ($scope, el, attrs) {
                /* Inspect */
                //console.log($scope);
                //console.log(el);
                //console.log(attrs);

                /* parameters */
                var param = {};
                param.side = attrs.pageslide || 'right';
                param.speed = attrs.psSpeed || '0.5';

                /* init */
                var cssClass = 'ng-pageslide ps-hidden';
                cssClass += ' ps-' + param.side;

                /* expose for debug */
                //deb = el;

                /* DOM manipulation */
                var content = document.getElementById(attrs.href.substr(1));
                var slider = document.createElement('div');
                slider.id = 'ng-pageslide';
                slider.className = cssClass;

                document.body.appendChild(slider);
                slider.appendChild(content);

                //console.log('Pageslider Done.');

                /* set CSS from parameters */
                if (param.speed){
                  slider.style.transitionDuration = param.speed + 's';
                  slider.style.webkitTransitionDuration = param.speed + 's';
                }

                /*
                * Events
                * */

                el[0].onclick = function(e){
                    e.preventDefault();
                    if (/ps-hidden/.exec(slider.className)){
                      content.style.display = 'none';
                      slider.className = slider.className.replace(' ps-hidden','');
                      slider.className += ' ps-shown';
                      //console.log('show');
                      setTimeout(function(){
                        content.style.display = 'block';
                      },(param.speed * 1000));

                    }

                  };

                var closeHandler = document.getElementById(attrs.href.substr(1) + '-close');

                if (closeHandler){
                  closeHandler.onclick = function(e){
                        e.preventDefault();
                        if (/ps-shown/.exec(slider.className)){
                          content.style.display = 'none';
                          slider.className = slider.className.replace(' ps-shown','');
                          slider.className += ' ps-hidden';
                          //console.log('hide');
                        }
                      };
                }

              }
          };

      });