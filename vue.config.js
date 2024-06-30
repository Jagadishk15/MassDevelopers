import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        return {
          limit: 8192,
          name: 'img/[name].[hash:8].[ext]'
        };
      });
  }
})
