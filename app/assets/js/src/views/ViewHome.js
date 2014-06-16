define([
    'ring',
    'dest/views/View',
    'dest/modules/ModuleTest',
    'hbs!/partials/test'
], function (ring, View, ModuleTest, tmplTest) {
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
        }
    });

    return $[className];
});