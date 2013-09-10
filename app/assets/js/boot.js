var App;

(function () {
	requirejs.config({
		paths: {
			'jquery': './vendor/jquery/jquery.min',
			'mootools': './vendor/mootools-core-1.4.5',
			'class.mutators': './vendor/Class.Mutators.jQuery',
			'underscore': './vendor/underscore/underscore-min'
		},
		shim: {
			'src/App': {},
			'class.mutators': {
				deps: [
					'mootools'
				],
				exports: 'classmutators'
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