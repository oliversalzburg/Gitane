module.exports = function(grunt) {
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
        },
        src: ["test/**/*.js"]
      }
    },
    jshint: {
      all: [
        'index.js'
      ],
      options: {
        asi: true,
      }
    },
    watch: {
      files: ["Gruntfile.js", "test/**/*.js"],
      tasks: ['test', 'jslint']
    }
  });
  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.registerTask("test", ['mochaTest']);
  grunt.registerTask("default", ['jshint', 'test']);
};