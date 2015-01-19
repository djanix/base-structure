module.exports = {
    min: {
        options: {
            map: true,
            preserveHacks: true,
            banner: '<%= banner %>'
        },
        expand: true,
        flatten: true,
        src: '<%= cssDest %>/*.css',
        dest: '<%= cssDest %>/'
    }
};