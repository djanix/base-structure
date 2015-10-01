module.exports = {
    //js: {
    //    files: [
    //        '<%= jsSrc %>/**/*.js',
    //        '<%= basePath %>/**/*.hbs'
    //    ],
    //    tasks: ['build:js']
    //},
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css']
    },
    sprite: {
        files: ["<%= imgPath %>/sprite/*.png"],
        tasks: ['sprite', 'build:css']
    },
    options: {
        spawn: false
    }
};