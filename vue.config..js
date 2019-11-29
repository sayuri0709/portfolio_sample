module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/base/_setting.scss";`
      }
    }
  }
};