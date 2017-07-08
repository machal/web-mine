'use strict';

module.exports = {

  images: {
    files: [{
      expand: true,
      cwd: 'source/images/',
      src: ['**/*.jpg','**/*.png','**/*.gif','**/*.svg'],
      dest: 'public/images/'
    }]
  }

};
