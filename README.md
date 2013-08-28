base-structure
================================

__website base structure using__
  - grunt
  - bower
  - less
  - requirejs
  - mootools classes


grunt
-------------------------
__using grunt to:__
  - compile less files
  - minify css
  - jshint
  - auto prefix css3
  - watch js/css files and recompile on the fly


__how to use grunt:__

move to your app folder

    cd path/to/project/folder

install dependencies

    npm install --save-dev

run grunt

    grunt


__more info on grunt:__
  - http://gruntjs.com/getting-started



bower
-------------------------
__using bower to install js plugins/dependencies__

    bower install [plugin name]



requirejs
-------------------------
using data-view="ViewName" in the html will load the right js (js/src/views/View[ViewName].js)

every views will extend View.js

you can create models and then call them in a view this way:

    var ModelTest = new $.ModelTest();
