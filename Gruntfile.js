
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
          'lib/site/js/scripts.js': ['node_modules/angular/angular.min.js',
                                     'node_modules/angular-material/angular-material.min.js', 
                                     'node_modules/angular-animate/angular-animate.min.js',
                                     'node_modules/angular-aria/angular-aria.min.js',
                                     'node_modules/angular-messages/angular-messages.min.js']
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
