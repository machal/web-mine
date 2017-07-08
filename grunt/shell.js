'use strict';

module.exports = {

  patternlab: {
    command: 'php core/console --generate --patternsonly'
  },

  dist: {
    command: [
        'cd dist/tivis.cz',
        // 'composer update',
        'php core/console --generate'
    ].join('&&')
  },

};
