// svg2png: prevod SVG do PNG kvuli starym prohlizecum
// ---------------------------------------------------

'use strict';

module.exports = {

  images: {
    files: [
        { cwd: 'public/images/', src: ['**/*.svg'] }
    ]
  },
  brand: {
    files: [
        { cwd: 'public/brand/', src: ['**/*.svg'] }
    ]
  },


};
