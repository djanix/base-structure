var App;

(function () {
	"use strict";

	requirejs.config({
		paths: {
			'jquery': './vendor/jquery/dist/jquery.min',
			'mootools': './vendor/mootools-core-1.4.5',
			'class.mutators': './vendor/Class.Mutators.jQuery',
			'underscore': './vendor/underscore/underscore',
			'hbs': './vendor/require-handlebars-plugin/hbs'
		},
		shim: {
			'src/App': {
				deps: [
					'jquery'
				]
			},
			'class.mutators': {
				deps: [
					'mootools'
				],
				exports: 'classmutators'
			},
			'underscore' : {
				exports : '_'
			}
		},
		waitSeconds: 15
	});

	requirejs([
		'./src/App'
	], function () {
		$(function () {
			App = new $.App($('#site'));
		});
	});

})();