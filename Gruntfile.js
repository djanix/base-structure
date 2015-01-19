module.exports = function (grunt) {
    // Check the /grunt folder to see all tasks (1 task per file)
    // regrouped tasks are in grunt/aliases.js file

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
};