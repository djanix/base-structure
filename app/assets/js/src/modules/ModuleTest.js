var Template = require('../../../../partials/test.hbs');

module.exports = {
    el: null,

    //-- Vars
    //--------------------------------------------------------------

    // Functions
    //----------------------------------------------------------------
    init: function () {
        var self = this;
        return self;
    },

    addHtml: function () {
        var self = this;

        console.log('test');

        self.el.html(Template({
            sentenceA: '<p>this is a test</p>',
            sentenceB: {
                wordA: 'Word'
            }
        }));
    }
};