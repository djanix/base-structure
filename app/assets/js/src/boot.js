window.$ = require('jquery');

require('handlebars');

var AppObj = require('./App');

var ViewHome = require('./views/ViewHome');

$(function () {
    var App = Object.create(AppObj, {el: {value: $('#site')}}).init();

    // Views
    var Home = Object.create(ViewHome, {el: {value: $('[data-view="Home"]')}}).init();
});