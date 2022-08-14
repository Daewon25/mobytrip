const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/mobytrip/'
      : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/index.scss";
        `
      }
    }
  }
});
