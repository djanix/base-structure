define([
    'ring',
    'src/modules/Module',
    'hbs!/partials/test'
], function (ring, Module, tmplTest) {
    "use strict";

    var className = 'ModuleTest';

    $[className] = ring.create([$.Module], {
        constructor: function (el) {
            var self = this;
            self.$super(el);
        },

        //-- Vars
        //--------------------------------------------------------------

        // Functions
        //----------------------------------------------------------------
        addHtml: function () {
            var self = this;

            self.el.html(tmplTest({
                sentenceA: '<p>this is a test</p>',
                sentenceB: {
                    wordA: 'Word'
                }
            }));
        },

        empty: null
    });

    return $[className];
});