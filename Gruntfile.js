
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browserify');


  grunt.initConfig({
    watch: {
      files: ['lib/site/css/less/**/*.less'],
      tasks: ['less']
    },
    browserify: {
      dist: {
        files: {
          'lib/site/js/scripts.js': ['node_modules/angular-material/angular-material.min.js', 'lib/site/js/**/*.js']
        },
        options: {
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["node_modules"],
          compress: true
        },
        files: {
          "lib/site/css/styles.css": "lib/site/css/less/styles.less"
        }
      }
    }
  });
};
