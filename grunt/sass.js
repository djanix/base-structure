module.exports = {
    options: {
        sourceMap: './main.css.map'
    },
    dist: {
        files: {
            '<%= cssDest %>/main.css': '<%= cssDest %>/main.scss'
        }
    }
};