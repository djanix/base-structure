var Template = require('../../../../partials/test.hbs');

$.ModuleTest = ring.create([$.Module], {
    constructor: function (el) {
        var self = this;
        self.$super(el);
    },

    //-- Vars
    //--------------------------------------------------------------

    // Functions
    //----------------------------------------------------------------
    addHtml: function () {
        var self = this;
        self.el.html(Template({
            sentenceA: '<p>this is a test</p>',
            sentenceB: {
                wordA: 'Word'
            }
        }));
    },

    empty: null
});