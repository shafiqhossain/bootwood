const sass = require('node-sass');

module.exports = {
  dist: {
    files: {
      'css/style.css': 'scss/style.scss'
    },
  },
  options: {
    implementation: sass,
    sourceMap: true
  }
};