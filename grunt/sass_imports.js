module.exports = {
    imports: {
        src: ['<%= cssSrc %>/helpers/vars.scss', '<%= cssSrc %>/helpers/*.scss', '<%= cssSrc %>/**/*.scss'],
        dest: '<%= cssDest %>/main.scss'
    }
};