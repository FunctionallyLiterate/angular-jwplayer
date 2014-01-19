# AngularJS jwplayer directive

This is a simple directive wrapper for the jwplayer video player library.  

## Demo
http://ds62987.github.io/angular-jwplayer/

## Dependencies
- required:
	[angularjs](http://angularjs.org/)
	[jwplayer](http://www.jwplayer.com/)

See `bower.json` and `index.html` in the `gh-pages` branch for a full list / more details

## Install
1. download the files
	1. Bower
		1. add `"angular-jwplayer": "latest"` to your `bower.json` file then run `bower install` OR run `bower install angular-jwplayer`
2. include the files in your app
	1. `angular-jwplayer.min.js`
3. include the module in angular (i.e. in `app.js`) - `angular-jwplayer`


## Documentation
See the `jwplayer.js` file top comments for usage examples and documentation
https://github.com/ds62987/angular-jwplayer/blob/master/jwplayer.js


```js
angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {

	$scope.options = {
		file: "pathToMyVideo/myvideo.mp4",
        height: 360,
        width: 640
	};

}]);

```
