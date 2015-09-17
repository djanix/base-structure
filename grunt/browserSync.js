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
            open: false,
            //proxy: '<%= vhost %>',
            port: '<%= port %>',
            watchTask: true,
            server: {
                baseDir: '<%= basePath %>/'
            }
        }
    }
};