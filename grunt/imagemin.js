// imagemin: zmensovani datoveho objemu obrazku
// --------------------------------------------

'use strict';

module.exports = {

  images: {
    files: [{
      expand: true,
      cwd: 'source/images/',
      src: ['**/*.jpg','**/*.png','**/*.gif','**/*.svg'],
      dest: 'public/images/'
    }]
  },
  icons: {
    options: {
      optimizationLevel: 3,
      svgoPlugins: [
        {removeViewBox: false},
        {removeDimensions: true}
      ],
    },
    files: [{
      expand: true,
      cwd: 'source/images/svg-icons/',
      src: ['**/*.svg'],
      dest: 'source/_patterns/00-atoms/icons/files/',
      rename: function(dest, src) {
        return dest + src.replace('.svg','.txt');
      },
    }]
  },


  brand: {
    files: [{
      expand: true,
      cwd: 'source/brand/',
      src: ['**/*.jpg','**/*.png','**/*.gif','**/*.svg'],
      dest: 'public/brand/'
    }]
  }
};
