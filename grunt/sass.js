module.exports = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            '<%= cssDest %>/main.css': '<%= cssDest %>/main.scss'
        }
    }
};