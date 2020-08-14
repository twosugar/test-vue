module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
  css: { extract: false },
  pages: {
    index: {
      // page 的入口
      entry: "src/demo.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html",
    },
  },
};
