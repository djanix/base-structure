define([
	'src/views/View',
	'src/models/Model',
	'src/models/ModelTest'
], function () {
	var className = 'ViewHome';

	$[className] = new Class({
		jQuery: className,
		Extends: $.View,
		options: {},

		//-- init
		//---------------------------------------------
		initialize: function (el, options) {
			el = $(el);
			var self = this;

			self.parent(el, options);
		},

		//-- Vars
		//--------------------------------------------------------------

		//-- Init
		//--------------------------------------------------------------
		initHook: function () {
			var self = this;

			self.parent();

			var ModelTest = new $.ModelTest();
			ModelTest.test();

			self.bindEventsHook();
		},

		//-- Functions
		//--------------------------------------------------------------
		bindEventsHook: function () {
			var self = this;
			var newEl = self.el.find('.test');
		},

		customFunction: function () {
			var self = this;
		},

		empty: null
	});

	return $[className];
});