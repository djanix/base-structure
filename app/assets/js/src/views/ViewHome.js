var ModuleTest = require('../modules/ModuleTest');

module.exports = {
    _el: null,

    init: function ($el) {
        var _this = this;
        _this._el = $el;
        _this.bindEvents();

        var Test = Object.create(ModuleTest).init(_this._el.find('[data-module="Test"]'));
        Test.addHtml();
    },

    bindEvents: function () {

    }
};