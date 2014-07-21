define([
    'ring',
    'dest/views/View',
    'dest/modules/Module'
], function (ring, View, Module) {
    "use strict";

    var className = 'App';

    $[className] = ring.create({
        constructor: function (el) {
            var self = this;
            self.el = $(el);
            self.init();
        },

        //-- Vars
        //--------------------------------------------------------------
        view: null,
        viewName: 'View',
        modules: {},
        moduleName: 'Module',


        //-- Init
        //--------------------------------------------------------------
        init: function () {
            var self = this;
            var dataView = self.el.find('[data-view]').attr('data-view');

            if (dataView) {
                self.viewName = 'View' + dataView;
            }

            self.oldBrowserConsole();
            self.setDeviceType();
            self.loadViewJs();

            $(window).resize(function () {
                self.setDeviceType();
            });
        },

        loadViewJs: function () {
            var self = this;

            require(['dest/views/' + self.viewName ], function () {
                self.view = new $[self.viewName](self.el.find('[data-view="' + self.el.find('[data-view]').attr('data-view') + '"]'));

                var $modules = self.el.find('[data-module]');
                self.loadModulesJs(self.view, $modules);
            });
        },

        loadModulesJs: function (view, $modules) {
            var self = this;
            $.each($modules, function (index, value) {
                var moduleName = 'Module' + $(value).attr('data-module');

                require(['dest/modules/' + moduleName], function () {
                    var moduleName = self.moduleName + $(value).attr('data-module');
                    var newModule = new $[moduleName]($modules[index]);

                    if (!self.modules[moduleName]) {
                        self.modules[moduleName] = [];
                    }

                    self.modules[moduleName].push(newModule);
                }, function (err) {
                    if (err.requireType != 'scripterror') {
                        throw err;
                    }
                });
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

    return $[className];
});