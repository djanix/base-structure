module.exports = {
    'default': ['build:js', 'build:css', 'replace:cache_break', 'browserSync', 'watch'],
    'deploy': ['build:js', 'build:css', 'replace:cache_break'],
    'build:css': ['sass_imports', 'sass', 'autoprefixer', 'csswring'],
    'build:js': ['jshint', 'browserify']
};