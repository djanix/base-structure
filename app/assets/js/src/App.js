define([
	'jquery',
	'mootools',
	'class.mutators',
	'underscore',
	'src/views/View'
], function () {
	var className = 'App';

	$[className] = new Class({
		jQuery: className,
		Implements: [Options, Events],
		options: {},

		//-- init
		//---------------------------------------------
		initialize: function (el, options) {
			el = $(el);
			var self = this;
			self.setOptions(options); // inherited from Options like jQuery.extend();
			self.el = el; // cache the jQuery object

			self.init();
		},

		//-- Vars
		//--------------------------------------------------------------
		view: null,
		viewName: 'View',


		//-- Init
		//--------------------------------------------------------------
		init: function () {
			var self = this;
			var dataView = self.el.attr('data-view');

			if (dataView) {
				self.viewName = 'View' + dataView;
			}

			self.oldBrowserConsole();
			self.loadViewJs();
		},

		loadViewJs: function () {
			var self = this;

			require(['src/views/' + self.viewName ], function () {
				self.view = new $[self.viewName](self.el);
			});
		},

		oldBrowserConsole: function () {
			// Avoid `console` errors in browsers that lack a console.
			var method;
			var noop = function () {};
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});

			while (length--) {
				method = methods[length];

				// Only stub undefined methods.
				if (!console[method]) {
					console[method] = noop;
				}
			}
		},

		empty: null
	});

	return $[className];
});