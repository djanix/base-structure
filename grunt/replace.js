module.exports = {
    cache_break: {
        src: ['<%= basePath %>/*.<%= htmlFileExtension %>'],
        overwrite: true,
        replacements: [
            {
                from: /cacheBreak: \".*\"/g,
                to: 'cacheBreak: "<%= cacheBreaker %>"'
            },
            {
                from: /\.css.*/g,
                to: '.css?v=<%= cacheBreaker %>"/>'
            },
            {
                from: /\.js.*?"/g,
                to: '.js?v=<%= cacheBreaker %>"'
            }
        ]
    }
};