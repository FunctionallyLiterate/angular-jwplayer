/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {

	$scope.options = {
		file: "http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4",
        height: 360,
        width: 640
	};

}]);