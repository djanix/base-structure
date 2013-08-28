module.exports = function(grunt) {
	var config = {
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
			dist: {
				options: {
					browsers: ['last 2 version', '> 1%', 'ie 8']
				},
				files: {
					'app/assets/css/dest/main.css': ['<%= config.cssDest %>/main.css']
				}
			}
		},
		cssmin: {
			options: {
				banner: '<%= banner %>'
			},
			files: {
				src: '<%= config.cssDest %>/main.css',
				dest: '<%= config.cssDest %>/main.css'
			}
		},
		jshint: {
			files: ['<%= config.jsSrc %>/*.js', '<%= config.jsSrc %>/**/*.js'],
			options: {
				force: true
			}
		},
		less: {
			options: {
				yuicompress: true
			},
			files: {
				src: "<%= config.cssSrc %>/main.less",
				dest: "<%= config.cssDest %>/main.css"
			}
		},
		watch: {
			js: {
				files: ['<%= config.jsSrc %>/*.js', '<%= config.jsSrc %>/**/*.js'],
				tasks: ['jshint']
			},
			less: {
				files: ["<%= config.cssSrc %>/*.less", "<%= config.cssSrc %>/**/*.less"],
				tasks: ['less', 'autoprefixer', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'less', 'autoprefixer', 'cssmin', 'watch']);
};