var App;
var ring;

(function () {
    "use strict";

    requirejs.config({
        paths: {
            'jquery': './libs/jquery/dist/jquery.min',
            'ring': './libs/ring/ring',
            'underscore': './libs/underscore/underscore',
            'hbs': './libs/require-handlebars-plugin/hbs'
        },
        shim: {
            'src/App': {
                deps: [
                    'jquery',
                    'ring'
                ]
            },
            'ring': {
                deps: [
                    'underscore'
                ]
            },
            'underscore': {
                exports: '_'
            }
        },

        urlArgs: "v=" + window.config.cacheBreak,
        waitSeconds: 15
    });

    requirejs([
        './src/App'
    ], function () {
        $(function () {
            App = new $.App($('#site'));
        });
    });
})();