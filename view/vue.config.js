const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  publicPath:  process.env.NODE_ENV === 'development' ? "/v0020/HR/vue-scripts/dist" : "/v0020/HR/vue-scripts/production",
  transpileDependencies: true,
  productionSourceMap: process.env.NODE_ENV === 'development' ? true : false,
  filenameHashing: false,

  chainWebpack: (config) => {
    config.plugin("extract-css").use(MiniCssExtractPlugin, [
      {
        filename: "main.css",
        chunkFilename: "main.css",
      },
    ]);
  },

  lintOnSave: false,
  outputDir: process.env.NODE_ENV === 'development' ? 'dist' : 'production',

  configureWebpack: {
    output: {
      filename: "main.js",
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    optimization: {
      splitChunks: false,
    },
    watch: process.env.NODE_ENV === 'development' ? true : false,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 100,
      poll: 200,
    },
  },
});
