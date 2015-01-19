module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: '<%= jsSrc %>/App.js',
        dest: '<%= jsDest %>'
    },
    options: {
        plugin: [['minifyify', {
            map: 'App.map',
            output: '<%= jsDest %>/App.map'
        }]],
        transform: ['browserify-shim', 'browserify-handlebars'],
        watch: true,
        browserifyOptions: {
            debug: true
        }
    }
};