module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsbeautifier: {
      modify: {
        src: ['Gruntfile.js', '*.js', 'conf/**.js'],
        options: {
          config: '.jsbeautifyrc'
        }
      },
      verify: {
        src: ['Gruntfile.js', '*.js', 'conf/**.js'],
        options: {
          mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', '*.js', 'conf/*.js']
    }
  });

  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('modify', [
    'jsbeautifier:modify',
    'jshint'
  ]);

  grunt.registerTask('verify', [
    'jsbeautifier:verify',
    'jshint'
  ]);
  // Default task(s).
  grunt.registerTask('default', ['verify']);

};
