/* services */

'use strict';

angular.module('lessonServices', ['ngResource']).
	factory('Lesson', function($resource) {
		return $resource('modules/:lessonId.json', {}, {
			query: {method: 'GET', isArray: true}
		});
	});