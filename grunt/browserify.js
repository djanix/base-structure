module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: '<%= jsSrc %>/boot.js',
        dest: '<%= jsDest %>'
    },
    options: {
        plugin: [['minifyify', {
            map: 'boot.map',
            output: '<%= jsDest %>/boot.map'
        }]],
        transform: [
            'babelify',
            'browserify-handlebars',
            'debowerify', 'decomponentify', 'deamdify', 'deglobalify'
        ],
        watch: true,
        browserifyOptions: {
            debug: true
        }
    }
};