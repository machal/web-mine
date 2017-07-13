'use strict';

module.exports = {

  sass: {
    files: ['source/_patterns/**/*.scss', 'source/scss/**/*.scss'],
    tasks: ['css'],
	  options: {
	    spawn: false
	  }
  },

  pattern_lab_component_builder: {
    files: ['source/css/scss/prg/variables.scss'],
    tasks: ['pattern_lab_component_builder'],
    options: {
      spawn: false
    }
  },

  html: {
    files: [
      'source/**/*.mustache',
      'source/**/*.md',
      'source/**/*.json',
      'source/**/*.yml'
    ],
    tasks: ['shell:patternlab', 'copy:patternlab_images'],
    options: {
      spawn: false
    }
  }

};
