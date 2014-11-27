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
####Note: You must include angular and jwplayer on the page as well.
If you have a key for jwplayer just include it as you normally would according to their docs
```html
<script type="text/javascript" src="/scripts/jwplayer.js" ></script>
<script type="text/javascript">jwplayer.key="YOUR_JW_PLAYER_KEY";</script>

```

Add any jwplayer setup options you want to an object in your angular controller.
```js
angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {

	$scope.options = {
		file: "pathToMyVideo/myvideo.mp4",
		image: "pathToMyImage/image.jpg", // optionnal
        height: 360,
        width: 640
	};

}]);

```

Add the element to the page and set the "setup" attribute to the variable you set up in your controller.  It is also a good idea to
give the element an id by setting player-id variable.
```html
<div ng-controller='HomeCtrl'>	
	<jwplayer setup="options"></jwplayer>
</div>

```
or
```html
<div ng-controller='HomeCtrl'>
	<jwplayer player-id="myplayer" setup="options"></jwplayer>
</div>

```
or
```html
<div ng-controller='HomeCtrl'>
	<jwplayer player-id="myplayer_{{ my_var_to_be_evaluated }}" setup="options"></jwplayer>
</div>

```
