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

        ModuleTest.addHtml();

        self.bindEventsHook();
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEventsHook: function () {
        var self = this;
    },

    empty: null
});