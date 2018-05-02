const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '~/src': resolve('src'),
      // for stylus
      'assets': resolve('src/assets'),
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            loaders: [
              'vue-style-loader',
              'css-loader',
              'less-loader',
            ],
          },
          {
            loaders: [
              'style-loader',
              'css-loader',
              'less-loader',
            ],
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
  ],
}