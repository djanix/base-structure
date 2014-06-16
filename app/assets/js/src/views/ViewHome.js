define([
    'ring',
    'dest/views/View',
    'dest/modules/ModuleTest'
], function (ring) {
    "use strict";

    var className = 'ViewHome';

    $[className] = ring.create([$.View], {
        constructor: function (el) {
            var self = this;
            self.$super(el);
        },

        //-- Vars
        //--------------------------------------------------------------

        //-- Init
        //--------------------------------------------------------------
        initHook: function () {
            var self = this;
            self.$super();

//			Load Module
//			You can also call it automatically by adding the attribute data-module="Test" in your html
            var ModuleTest = new $.ModuleTest(self.el.find('.templateDiv'));
            ModuleTest.addHtml();

            self.bindEventsHook();
        },

        //-- Functions
        //--------------------------------------------------------------
        bindEventsHook: function () {

        }
    });

    return $[className];
});