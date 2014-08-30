$.Module = ring.create({
    constructor: function (view, el) {
        var self = this;
        self.view = $(view);
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