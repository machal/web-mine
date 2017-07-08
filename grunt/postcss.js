'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        // require('pixrem')(),
        require('autoprefixer')({
          browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox ESR',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6',
          ],
        }),
        require('cssnano')(
          {
            calc: false
          }
        ),
      ],
    },
    files: {
      'public/css/style.min.css': 'public/css/style.css',
      'public/css/pattern-scaffolding.min.css': 'source/css/pattern-scaffolding.css'
    }
  }

};
