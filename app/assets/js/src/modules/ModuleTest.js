define([
    'src/modules/Module'
], function () {
    "use strict";
    var className = 'ModuleTest';

    $[className] = new Class({
        jQuery: className,
        Extends: $.Module,
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
            console.log('module Test called');
        },

        empty: null
    });

    return $[className];
});