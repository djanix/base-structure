window.ring = require('ring');
window.$ = require('jquery');
var View = require('./views/View');
var Module = require('./modules/Module');

$.App = ring.create({
    constructor: function (el) {
        var self = this;
        self.el = $(el);
        self.init();
    },

    //-- Vars
    //--------------------------------------------------------------
    jsPath: '/assets/js/dest/',
    view: null,
    viewName: 'View',
    modules: {},
    moduleName: 'Module',


    //-- Init
    //--------------------------------------------------------------
    init: function () {
        var self = this;
        var $view = self.el.find('[data-view]');
        var $modules = self.el.find('[data-module]');

        if ($view) {
            self.viewName += $view.attr('data-view');
        }

        self.oldBrowserConsole();
        self.setDeviceType();

        self.loadView(self.viewName);

        $.each($modules, function (index, value) {
            self.loadModule(self.moduleName + $(value).attr('data-module'), $modules[index], $view);
        });

        $(window).resize(function () {
            self.setDeviceType();
        });
    },

    loadScript: function(url, callback) {
        var self = this;

        $.ajax({
            url: url,
            dataType: 'script'
        })
        .done(function (data, textStatus, jqXHR) {
            return callback(null, 'success');
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            return callback(errorThrown, null);
        });
    },

    loadView: function (viewName) {
        var self = this;
        var path = self.jsPath + viewName + '.js';

        self.loadScript(path, function(err, res) {
            if (err) { return console.log(['failing loading ' + path, err]); }

            self.view = new $[viewName](self.el.find('[data-view="' + self.el.find('[data-view]').attr('data-view') + '"]'));
        });
    },

    loadModule: function (moduleName, $el, view) {
        var self = this;
        var path = self.jsPath + moduleName + '.js';

        self.loadScript(path, function(err, res) {
            if (err) { return console.log(['failing loading ' + path, err]); }

            var newModule = new $[moduleName](view, $el);

            if (!self.modules[moduleName]) {
                self.modules[moduleName] = [];
            }

            self.modules[moduleName].push(newModule);
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
    },

    oldBrowserConsole: function () {
        // Avoid `console` errors in browsers that lack a console.
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }
});

$(function () {
    window.App = new $.App($('#site'));
});