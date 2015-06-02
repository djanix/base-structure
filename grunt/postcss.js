module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer-core')({browsers: [
                'last 2 version',
                'safari 6',
                'ie 9',
                'opera 12.1',
                'ios 6',
                'android 4',
                'Firefox ESR'
            ]}),
            require('csswring')
        ]
    },
    dist: {
        src: '<%= cssDest %>/*.css'
    }
};