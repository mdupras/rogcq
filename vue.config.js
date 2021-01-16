const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
};
