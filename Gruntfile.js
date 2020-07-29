var path = require('path');

module.exports = function (grunt) {
  // Record grunt task execution times. Must be first.
  require('time-grunt')(grunt);

  // Load npm installed 'grunt-*' tasks and configurations.
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'config')
  });

  // Register the "default" task.
  grunt.registerTask('default', ['sass', 'watch']);

  grunt.registerTask('compile', ['sass']);

  // Load custom tasks.
  // grunt.task.loadTasks('grunt');
};
