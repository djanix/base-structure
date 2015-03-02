module.exports = {
    dev: {
        bsFiles: {
            src : [
                '<%= cssDest %>/**/*.css',
                '<%= jsDest %>/**/*.js',
                '<%= basePath %>/**/*.html'
            ]
        },
        options: {
            //open: false,
            //proxy: '<%= vhost %>',
            watchTask: true,
            server: {
                baseDir: '<%= basePath %>/'
            }
        }
    }
};