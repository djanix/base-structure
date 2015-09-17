module.exports = {
    extract : {
        outfile: '<%= cssDest %>/critical.css',
        css: '<%= cssDest %>/main.css',
        url: 'http://localhost:<%= port %>',
        width: 1280,
        height: 600
    }
};