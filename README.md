base-structure
================================

### website base structure using
  - grunt
  - bower
  - less
  - requirejs
  - mootools classes


grunt
-------------------------
### using grunt to:
  - compile less files
  - minify css
  - jshint
  - auto prefix css3
  - watch js/css files and recompile on the fly


### how to use grunt:

#### move to your app folder

    cd path/to/project/folder

#### install dependencies

    npm install --save-dev

#### run grunt

    grunt


### more info on grunt:
  - http://gruntjs.com/getting-started



bower
-------------------------
### using bower to install js plugins/dependencies

    bower install [plugin name]



requirejs
-------------------------
using data-view="ViewName" in the html will load the right js (js/src/views/View[ViewName].js)

every views will extend View.js

you can create models and then call them in a view this way:

    var ModelTest = new $.ModelTest();
