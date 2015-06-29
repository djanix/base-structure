window.$ = require('jquery');

require('handlebars');

var AppObj = require('./App');

var ViewsObj = {
    Home: require('./views/ViewHome')
};

$(function () {
    var App = Object.create(AppObj).init($('#site'));
    var Views = {};

    $.each(ViewsObj, function (index, value) {
        Views[index] = Object.create(value).init($(`[data-view="${index}"]`));
    });
});