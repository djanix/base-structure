module.exports = {
    scss_import_path: {
        src: ['<%= cssDest %>/*.scss'],
        overwrite: true,
        replacements: [
            {
                from: /\\/g,
                to: '/'
            }
        ]
    },
    cache_break: {
        src: ['<%= basePath %>/*.<%= htmlFileExtension %>'],
        overwrite: true,
        replacements: [
            {
                from: /cacheBreak: \".*\"/g,
                to: 'cacheBreak: "<%= cacheBreaker %>"'
            },
            {
                from: /\?v=\w+/g,
                to: '?v=<%= cacheBreaker %>'
            }
        ]
    }
};