'use strict';

module.exports = function (grunt) {

  var options = {

    // External configs
    pkg: grunt.file.readJSON('package.json'),

    // Paths TODO
    // paths: {
    //   src: 'source/_patterns',
    //   dist: 'dist',
    // },

    // Development
    devUrl: 'ct-patternlab.dev',


  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { config: options });



  // See the `grunt/` directory for individual task configurations.
};
