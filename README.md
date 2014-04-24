base-structure
================================

This is a frontend boilerplate to start a web project, using sass, requirejs, mootools classes and grunt.

### What you need to install
  - nodejs
  -  -> grunt
  -  -> bower (on windows you'll need to install git)

### How to start

go to the project folder ( {project folder}/app ) and then run these commands:

    npm install

    bower install

    grunt



grunt
-------------------------
### using grunt to:
  - compile sass files
  - minify css
  - jshint
  - auto prefix css3
  - watch js/css files and recompile on the fly


### how to use grunt:

#### move to your app folder

    cd path/to/project/folder

#### install dependencies

    npm install {package name} --save-dev

#### add the new package in Gruntfile.js

#### run grunt

    grunt


### more info on grunt:
  - http://gruntjs.com/getting-started



bower
-------------------------
### using bower to install js plugins/dependencies

    bower install [plugin name]



JS
-------------------------
requirejs is used to add dependencies.
boot.js add the requirejs configuration and the call the app.
app.js load js files needed to run the app, and allow to load the right view and module files

using data-view="ViewName" in the html will load the right js (js/src/views/View[ViewName].js)

every views will extend View.js

you can do the same thing with the modules ( data-module="ModuleName" ) ... it will extend Module.js

you can create modules and then call them in a view this way:

    var ModuleTest = new $.ModuleTest();

don't forget to add the dependency in the define at the top of the file.

*warning: use

    self.el.find('.class')

instead of

    $('.class')




### difference between a view and a module:

A view is basically a page (home.html will be ViewHome.js ... products.html will be ViewProducts.js)
A module will be inside a view. The same module can be shared between many views. A module can be present more than once in the same view too.
Plus, you can instantiate a module on the page load (same as a view), or call it only when some stuff happens ( var ModuleTest = new $.ModuleTest(); )



SASS
-------------------------

The only file added in the html is /app/assets/css/dest/main.css

Every time you add a new scss file, you should add it to the main.scss

Every file is concatened, minified, and all prefix are added with grunt. This way, no need to add -webkit, -moz, -o etc. Grunt will take care of it.

The same structure as the js files apply. One folder for the views, and one folder for the modules.
To be consistent, you should isolate every views with

    [data-view="ViewName"] { }

and every module with

	[data-module="ModuleName"] { }

to avoid conflicts.

variables and mixin should go in helpers/vars.scss



Responsive
-------------------------

- optimize images for mobile vs desktop
- calc mixin
- css breakpoints / js breakpoint (window.deviceType)