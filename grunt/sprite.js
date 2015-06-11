module.exports = {
    all: {
        cssFormat: 'css_retina',
        dest: '<%= imgPath %>/sprite.png',
        destCss: '<%= cssSrc %>/sprite.scss',
        imgPath: '../../img/sprite.png',
        retinaDest: '<%= imgPath %>/sprite@2x.png',
        retinaSrcFilter: ['<%= imgPath %>/sprite/*@2x.png'],
        src: '<%= imgPath %>/sprite/*.png'
    }
};