module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(
        grunt.loadNpmTasks
    );

    var config = {
        basePath: 'app',
        jsSrc: 'app/assets/js/src',
        jsDest: 'app/assets/js/dest',
        cssSrc: 'app/assets/css/src',
        cssDest: 'app/assets/css/dest'
    };

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.name %> - <%= pkg.version %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author.name %> - <%= pkg.author.url %> */\n\n',
        autoprefixer: {
            single_file: {
                options: {
                    browsers: ['last 3 version', '> 1%', 'ie 8']
                },
                src: '<%= config.cssDest %>/main.css',
                dest: '<%= config.cssDest %>/main.css'
            }
        },
        csswring: {
            min: {
                options: {
                    map: true
                },
                src: '<%= config.cssDest %>/main.css',
                dest: '<%= config.cssDest %>/main.css'
            }
        },
        jshint: {
            files: ['<%= config.jsSrc %>/**/*.js'],
            options: {
                force: true
            }
        },
        replace: {
            cache_break: {
                src: ['<%= config.basePath %>/index.html'],
                overwrite: true,
                replacements: [
                    {
                        from: /cacheBreak: \".*\"/g,
                        to: 'cacheBreak: "<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>"'
                    },
                    {
                        from: /\.css.*/g,
                        to: '.css?v=<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>"/>'
                    }
                ]
            },
            'scss_import_path': {
                src: ['<%= config.cssDest %>/main.scss'],
                overwrite: true,
                replacements: [
                    {
                        from: /\\/g,
                        to: '/'
                    }
                ]
            }
        },
        sass: {
            options: {
                sourceComments: 'map'
            },
            dist: {
                files: [
                    {
                        src: '<%= config.cssDest %>/main.scss',
                        dest: '<%= config.cssDest %>/main.css'
                    }
                ]
            }
        },
        sass_imports: {
            imports: {
                src: ['<%= config.cssSrc %>/helpers/vars.scss', '<%= config.cssSrc %>/helpers/*.scss', '<%= config.cssSrc %>/**/*.scss'],
                dest: '<%= config.cssDest %>/main.scss'
            }
        },
        watch: {
            js: {
                files: ['<%= config.jsSrc %>/**/*.js'],
                tasks: ['build:js']
            },
            sass: {
                files: ["<%= config.cssSrc %>/**/*.scss"],
                tasks: ['build:css']
            },
            options: {
                spawn: true
            }
        }
    });

    grunt.registerTask('default', ['build:js', 'build:css', 'replace:cache_break', 'watch']);

    grunt.registerTask('build', ['build:js', 'build:css', 'replace:cache_break']);
    grunt.registerTask('build:css', ['sass_imports', 'replace:scss_import_path', 'sass', 'autoprefixer', 'csswring']);
    grunt.registerTask('build:js', ['jshint']);
};