$.ModuleTest = ring.create([$.Module], {
    constructor: function (view, el) {
        var self = this;
        self.$super(view, el);
    },

    //-- Vars
    //--------------------------------------------------------------

    // Functions
    //----------------------------------------------------------------
    init: function () {
        var self = this;
        self.el.html('<p>yayy</p>');
    },

    empty: null
});