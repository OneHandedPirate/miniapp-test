// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers';

export default defineConfig((/* ctx */) => {
  return {
    boot: [
      'axios',
      'telegram'
    ],

    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons',
    ],

    build: {
      publicPath: process.env.VITE__PUBLIC_PATH || '/miniapp-test/',
      target: {
        browser: [ 'es2022', 'firefox115', 'chrome115', 'safari14' ],
        node: 'node20'
      },

      typescript: {
        strict: true,
        vueShim: true
      },

      vueRouterMode: 'history',

      vitePlugins: [
        ['vite-plugin-checker', {
          vueTsc: true,
          eslint: {
            lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
            useFlatConfig: true
          }
        }, { server: false }]
      ]
    },

    devServer: {
      // https: true,
      open: true,
      allowedHosts: true
    },

    framework: {
      config: {},
      plugins: []
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: [
        'render'
      ],

      pwa: false
    },

    pwa: {
      workboxMode: 'GenerateSW'
    },

    cordova: {
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      preloadScripts: [ 'electron-preload' ],
      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
      },

      builder: {
        appId: 'miniapp-test'
      }
    },

    bex: {
      extraScripts: []
    }
  }
});
