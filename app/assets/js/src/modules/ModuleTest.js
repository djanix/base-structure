define([
    'ring',
    'src/modules/Module'
], function (ring) {
    "use strict";

    var className = 'ModuleTest';

    $[className] = ring.create([$.Module], {
        constructor: function (el) {
            var self = this;
            self.$super(el);
        },

        //-- Vars
        //--------------------------------------------------------------

        // Functions
        //----------------------------------------------------------------
        test: function () {
            var self = this;
            console.log('module Test called');
        },

        empty: null
    });

    return $[className];
});