module.exports = {
    _el: null,

    init: function ($el) {
        var _this = this;
        _this._el = $el;

        _this.setDeviceType();

        $(window).resize(function () {
            _this.setDeviceType();
        });

        return _this;
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
        newDevice = newDevice.replace(/["']/g, '');

        if (newDevice != window.deviceType) {
            window.deviceType = newDevice;
        }
    }
};