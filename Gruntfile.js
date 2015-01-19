module.exports = function (grunt) {
    // --------------------------------------------------------------
    //   Check the /grunt folder to see all tasks (1 task per file)
    // --------------------------------------------------------------

    var config = {
        banner: '<%= pkg.name %> - <%= pkg.version %>\n' +
                '<%= pkg.author.name %> - <%= pkg.author.url %>\n' +
                'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>',
        basePath: 'app',
        cacheBreaker: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',
        cssSrc: '<%= basePath %>/assets/css/src',
        cssDest: '<%= basePath %>/assets/css/dest',
        htmlFileExtension: 'html',
        jsSrc: '<%= basePath %>/assets/js/src',
        jsDest: '<%= basePath %>/assets/js/dest',
        pkg: grunt.file.readJSON('package.json'),
        vhost: 'basestructure.local'
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
            scope: 'devDependencies'
        }
    });

    grunt.registerTask('default', ['deploy', 'browserSync', 'watch']);
    grunt.registerTask('deploy', ['build:js', 'build:css', 'replace:cache_break']);

    grunt.registerTask('build:css', ['sass_imports', 'sass', 'autoprefixer', 'csswring']);
    grunt.registerTask('build:js', ['jshint', 'browserify']);
};