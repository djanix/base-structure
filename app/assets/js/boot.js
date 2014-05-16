var App;

(function () {
    "use strict";

    requirejs.config({
        paths: {
            'jquery': './libs/jquery/dist/jquery.min',
            'mootools': './libs/mootools-core-1.4.5',
            'class.mutators': './libs/Class.Mutators.jQuery',
            'underscore': './libs/underscore/underscore',
            'hbs': './libs/require-handlebars-plugin/hbs'
        },
        shim: {
            'src/App': {
                deps: [
                    'jquery'
                ]
            },
            'class.mutators': {
                deps: [
                    'mootools'
                ],
                exports: 'classmutators'
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