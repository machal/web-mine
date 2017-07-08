'use strict';

module.exports = {

  default: [
    'copy',
    'css',
    'browserSync',
    'watch'
  ],

  deploy: [
    'copy',
    'css'
  ],

  css: [
    'sass:default',
    'postcss:default'
  ],

  img: [
    'imagemin',
    'svg2png',
    'icons'
  ]

};
