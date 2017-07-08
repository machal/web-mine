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
        src: 'source/css/style.scss',
        dest: 'public/css/style.css'
      }
    ]
  }

};
