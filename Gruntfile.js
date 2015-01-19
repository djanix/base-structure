module.exports = function (grunt) {
    // --------------------------------------------------------------
    //   Check the /grunt folder to see all tasks (1 task per file)
    // --------------------------------------------------------------

    var config = {
        vhost: 'basestructure.local',
        basePath: 'app',
        jsSrc: '<%= basePath %>/assets/js/src',
        jsDest: '<%= basePath %>/assets/js/dest',
        cssSrc: '<%= basePath %>/assets/css/src',
        cssDest: '<%= basePath %>/assets/css/dest',
        htmlFileExtension: 'html',
        cacheBreaker: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',
        pkg: grunt.file.readJSON('package.json'),
        banner: '<%= pkg.name %> - <%= pkg.version %>\n' +
                '<%= pkg.author.name %> - <%= pkg.author.url %>\n' +
                'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>'
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });

    grunt.registerTask('default', ['deploy', 'browserSync', 'watch']);
    grunt.registerTask('deploy', ['build:js', 'build:css', 'replace:cache_break']);

    grunt.registerTask('build:css', ['sass_imports', 'sass', 'autoprefixer', 'csswring']);
    grunt.registerTask('build:js', ['jshint', 'browserify']);
};