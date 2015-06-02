var ModuleTest = require('../modules/ModuleTest');

module.exports = {
    el: null,

    //-- Vars
    //--------------------------------------------------------------

    //-- Init
    //--------------------------------------------------------------
    init: function () {
        var self = this;
        var Test = Object.create(ModuleTest, {el: {value: self.el.find('[data-module="Test"]')}}).init();

        Test.addHtml();

        self.bindEvents();

        return self;
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEvents: function () {
        var self = this;
    }
};