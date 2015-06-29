var ModuleTest = require('../modules/ModuleTest');

module.exports = {
    _el: null,

    init: function ($el) {
        var _this = this;
        if (!$el.length) { return; }
        _this._el = $el;

        var Test = Object.create(ModuleTest).init(_this._el.find('[data-module="Test"]'));
        Test.addHtml();

        _this.bindEvents();

        return _this;
    },

    bindEvents: function () {
        var _this = this;
    }
};