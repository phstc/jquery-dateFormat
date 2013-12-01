module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jasmine: {
      js: {
        src: 'src/**/*.js',
        options: {
          specs: 'test/*_spec.js',
          helpers: 'test/helpers/*',
          vendor: 'test/vendor/*'
        }
      }
    },

    exec: {
      open_spec_runner: {
        cmd: 'open _SpecRunner.html'
      }
    },

    jshint: {
      files: ['src/**/*.js', 'test/**/*.js'],
      options: {
        ignores: ['test/vendor/**/*.js']
      },
      gruntfile: 'Gruntfile.js'
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('test:browser', ['jasmine:js:build', 'exec:open_spec_runner']);

  grunt.registerTask('default', ['jshint', 'jasmine', 'concat', 'uglify']);
};

