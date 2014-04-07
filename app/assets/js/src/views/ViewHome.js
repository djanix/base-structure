define([
	'src/views/View',
	'src/modules/ModuleTest',
	'hbs!/partials/test'
], function (View, ModuleTest, tmplTest) {
	"use strict";
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

//			Load Module
//			You can also call it automatically by adding the attribute data-module="Test" in your html
			var ModuleTest = new $.ModuleTest();
			ModuleTest.test();

			self.el.find('.templateDiv').append(tmplTest({
				sentenceA: '<p>this is a test</p>',
				sentenceB: {
					wordA: 'Word'
				}
			}));

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