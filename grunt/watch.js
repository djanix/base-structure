module.exports = {
    js: {
        files: [
            '<%= jsSrc %>/**/*.js',
            '<%= basePath %>/**/*.hbs'
        ],
        tasks: ['build:js']
    },
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css']
    },
    options: {
        spawn: true
    }
};