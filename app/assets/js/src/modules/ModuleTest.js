var Template = require('../../../../partials/test.hbs');

module.exports = {
    _el: null,

    init: function ($el) {
        var _this = this;
        _this._el = $el;
        return _this;
    },

    addHtml: function () {
        var _this = this;
        _this._el.html(Template({
            sentenceA: '<p>this is a test</p>',
            sentenceB: {
                wordA: 'Word'
            }
        }));
    }
};