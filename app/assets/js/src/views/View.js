define([
    'ring'
], function (ring) {
    "use strict";

    var className = 'View';

    $[className] = ring.create({
        constructor: function (el) {
            var self = this;
            self.el = $(el);
            self.init();
        },

        //-- Vars
        //--------------------------------------------------------------

        //-- Init
        //--------------------------------------------------------------
        init: function () {
            var self = this;

            self.initHook();
            self.bindEvents();
        },

        //-- Hooks
        //--------------------------------------------------------------
        initHook: function () {
            var self = this;
        },

        //-- Functions
        //--------------------------------------------------------------
        bindEvents: function () {
            var self = this;
        }
    });

    return $[className];
});