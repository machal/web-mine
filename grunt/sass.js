'use strict';

module.exports = {

  default: {
    options: {
        sourceMap: true
    },
    files: [
      {
        src: 'source/css/pattern-scaffolding.scss',
        dest: 'public/css/pattern-scaffolding.css'
      },
      {
        src: 'source/scss/index.scss',
        dest: 'public/css/style.css'
      }
    ]
  }

};
