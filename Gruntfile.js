/**
 * Created by Administrator on 4/2/2016.
 */
module.exports = function(grunt){
  grunt.initConfig({
      less: {
          development: {
              options: {
                  compress       : false,
                  cleancss       : false,
                  optimization   : 2,
                  dumpLineNumbers: 'false'
              },
              files  : {
                  "assets/css/mystyles.css": "assets/less/mystyles.less"
              }
          }
      },

      watch: {
          options: {
              livereload: true
          },
          styles : {
              files  : ['assets/**/*.less'],
              tasks  : ['less'],
              options: {
                  nospawn: true
              }
          }
      }
  });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);

};