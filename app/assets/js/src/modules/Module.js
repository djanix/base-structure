define([
    'jquery',
    'mootools',
    'class.mutators',
    'underscore'
], function () {
    "use strict";
    var className = 'Module';

    $[className] = new Class({
        jQuery: className,
        Implements: [Options, Events],
        options: {},

        //-- init
        //---------------------------------------------
        initialize: function (el, options) {
            el = $(el);
            var self = this;

            self.el = el;

            self.setOptions(options);
            //-
            self.init();
        },

        //-- Vars
        //--------------------------------------------------------------

        //-- Init
        //--------------------------------------------------------------
        init: function () {
            var self = this;
            self.initHook();
        },

        //-- Hooks
        //--------------------------------------------------------------
        initHook: function () {
            var self = this;
        },

        // Functions
        //----------------------------------------------------------------

        empty: null
    });

    return $[className];
});