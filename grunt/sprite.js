module.exports = {
    all: {
        cssFormat: 'css_retina',
        dest: '<%= imgPath %>/sprite.png',
        destCss: '<%= cssSrc %>/sprite.scss',
        imgPath: '/assets/img/sprite.png',
        retinaImgPath: '/assets/img/sprite@2x.png',
        retinaDest: '<%= imgPath %>/sprite@2x.png',
        retinaSrcFilter: ['<%= imgPath %>/sprite/*@2x.png'],
        src: '<%= imgPath %>/sprite/*.png'
    }
};