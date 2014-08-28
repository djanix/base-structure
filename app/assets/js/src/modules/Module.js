var ring = require('ring');
var $ = require('jquery');

$.Module = ring.create({
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