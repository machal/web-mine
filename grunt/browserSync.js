'use strict';

module.exports = {

  dev: {
    bsFiles: {
      src: [
        'public/css/*.css',
        // it just reloads:
        'public/patterns/**/*.html',
      ],
    },
    options: {
      server: './public/',
      watchTask: true,
      port: 3444,
      ui: {
        port: 3445,
        weinre: {
            port: 9090
        }
      },
      // bs-html-injector in my configuration works weird
      // it inject, removes css and then reloads
      // plugins: [
      //   {
      //     module: 'bs-html-injector',
      //     options: {
      //         files: 'public/patterns/**/*.html'
      //     }
      //   }
      // ]
    },
  },

};
