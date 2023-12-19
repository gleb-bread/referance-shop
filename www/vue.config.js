const { defineConfig } = require("@vue/cli-service");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: process.env.NODE_ENV === 'development' ? true : false,
  lintOnSave: false,
  outputDir: process.env.NODE_ENV === 'development' ? 'dist' : 'production',

  configureWebpack: {
    // plugins: [
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: path.resolve(__dirname, 'src/assets/icons/message-error'),
    //         to: path.resolve(__dirname, `${process.env.NODE_ENV === 'development' ? 'dist' : 'production'}/message-error/img`),
    //         globOptions: {
    //           ignore: ['.*'],
    //         },
    //       },
    //       {
    //         from: path.resolve(__dirname, 'src/assets/icons/print-masters'),
    //         to: path.resolve(__dirname, `${process.env.NODE_ENV === 'development' ? 'dist' : 'production'}/print-masters/img`),
    //         globOptions: {
    //           ignore: ['.*'],
    //         },
    //       },
    //     ],
    //   }),
    // ],
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    watch: process.env.NODE_ENV === 'development' ? true : false,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 100,
      poll: 200,
    },
  },

  pluginOptions: {
    vuetify: {}
  }
});
