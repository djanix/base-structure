$.ViewHome = ring.create([$.View], {
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

//	    Load Module
//	    You can also call it automatically by adding the attribute data-module="Test" in your html
        var ModuleTest = App.loadModule('ModuleTest', self.el.find('.test'), self.el);

        self.bindEventsHook();
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEventsHook: function () {
        var self = this;
    },

    empty: null
});