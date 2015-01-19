module.exports = {
    dist: {
        options: {
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: '<%= jsSrc %>',
            src: '**/*.js',
            dest: '<%= jsDest %>'
        }]
    }
};