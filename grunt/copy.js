'use strict';

module.exports = {

  normalize: {
    src: 'node_modules/normalize.css/normalize.css',
    dest: 'source/css/scss/vendor/normalize.scss',
  },

  bootstrap: {
    files: [{
      expand: true,
      cwd: 'node_modules/bootstrap/scss/',
      src: ['**/*.scss'],
      dest: 'source/css/scss/vendor/bootstrap/'
    }]
  },

  fonts: {
    files: [{
      expand: true,
      cwd: 'source/fonts/',
      src: ['**/*.*'],
      dest: 'public/fonts/'
    }]
  }
};
