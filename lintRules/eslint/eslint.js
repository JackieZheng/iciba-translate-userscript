/* eslint-disable global-require */
// const path = require('path')

module.exports = {
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'typescript',
  ],
  'extends': [
    'airbnb-base',
    './rules/airbnbOverride.js',
    './rules/vue.js',
    './rules/import.js',
    './override/vue.js',
    './override/ts.js',
  ],
}