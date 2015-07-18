

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.initConfig({
    watch: {
      files: ['site/css/less/**/*.less'],
      tasks: ['less']
    },

    less: {
      development: {
        options: {
          paths: ["bower_components"]
        },
        files: {
          "site/css/styles.css": "site/css/less/styles.less"
        }
      }
    }
  });
}
