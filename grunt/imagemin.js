module.exports = {
    dynamic: {
        files: [{
            expand: true,
            src: ['<%= imgPath %>/**/*.{png,jpg,gif}']
        }]
    }
};