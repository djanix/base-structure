define([
	'src/models/Model'
], function() {
	var className = 'ModelTest';

	$[className] = new Class({
		jQuery: className,
		Extends: $.Model,
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

		// Functions
		//----------------------------------------------------------------
		test: function () {
			var self = this;
		},

		empty: null

	});

	return $[className];
});