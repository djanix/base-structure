window._ = require('underscore');
window.$ = require('jquery');
window.ring = require('ring');

require('handlebars');

require('./App');

require('./modules/Module');
require('./modules/ModuleTest');

require('./views/View');
require('./views/ViewHome');

$(function () {
    window.App = new $.App($('#site'));

    // Modules
    App.ModuleTest = new $.ModuleTest($('[data-module="Test"]'));

    // Views
    App.ViewHome = new $.ViewHome($('[data-view="Home"]'));
});