window._ = require('underscore');
window.$ = require('jquery');
window.ring = require('ring');

require('handlebars');

require('./views/View');
require('./views/ViewHome');

require('./modules/Module');
require('./modules/ModuleTest');

$(function () {
    window.App = new $.App($('#site'));

    //Modules
    App.ModuleTest = new $.ModuleTest($('[data-module="Test"]'));

    //Views
    App.ViewHome = new $.ViewHome($('[data-view="Home"]'));
});

$.App = ring.create({
    constructor: function (el) {
        var self = this;
        self.el = $(el);
        self.init();
    },

    //-- Vars
    //--------------------------------------------------------------


    //-- Init
    //--------------------------------------------------------------
    init: function () {
        var self = this;

        self.setDeviceType();

        $(window).resize(function () {
            self.setDeviceType();
        });
    },

    setDeviceType: function () {
        // IE FIX FOR getComputedStyle
        if (!window.getComputedStyle) {
            window.getComputedStyle = function (el) {
                this.el = el;
                this.getPropertyValue = function (prop) {
                    var re = /(\-([a-z]){1})/g;
                    if (prop == 'float') prop = 'styleFloat';
                    if (re.test(prop)) {
                        prop = prop.replace(re, function () {
                            return arguments[2].toUpperCase();
                        });
                    }
                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                };
                return this;
            };
        }

        var newDevice = window.getComputedStyle(document.body, ':after').getPropertyValue('content');

        // IE8 DEFAULT VALUE
        if (!newDevice) {
            newDevice = 'desktop';
        }

        // IE9-10 REMOVE QUOTE FROM CONTENT STRING
        newDevice = newDevice.replace(/"/g, '');

        if (newDevice != window.deviceType) {
            window.deviceType = newDevice;
        }
    }
});