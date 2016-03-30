
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.initConfig({
    watch: {
      files: ['lib/site/css/less/**/*.less'],
      tasks: ['less']
    },

    less: {
      development: {
        options: {
          paths: ["bower_components"]
        },
        files: {
          "lib/site/css/styles.css": "lib/site/css/less/styles.less"
        }
      }
    }
  });
};