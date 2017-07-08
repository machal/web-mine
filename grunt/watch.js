'use strict';

module.exports = {

  sass: {
    files: ['source/_patterns/**/*.scss', 'source/css/**/*.scss', 'source/brand/**/*.scss'],
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

  images: {
    files: [
      'source/images/**/*.jpg', 'source/images/**/*.svg', 'source/images/**/*.png',
      'source/brand/**/*.jpg', 'source/brand/**/*.svg', 'source/brand/**/*.png',
    ],
    tasks: ['img'],
    options: {
      spawn: false
    }
  },

  html: {
    files: ['source/_patterns/**/**/*.twig', 'source/_patterns/**/**/*.md', 'source/_patterns/**/**/*.json', 'source/**/*.json'],
    tasks: ['shell:patternlab'],
    options: {
      spawn: false
    }
  }

};
