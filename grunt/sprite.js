module.exports = {
    all: {
        cssFormat: 'css',
        dest: '<%= imgPath %>/sprite.png',
        destCss: '<%= cssSrc %>/sprite.scss',
        imgPath: '../../img/sprite.png',
        src: '<%= imgPath %>/sprite/*.png'
    }
};