// @flow

module.exports = {
  presets: ['@kiwicom/babel-preset-kiwicom', 'next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
  ]
};
