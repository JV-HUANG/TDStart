// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import colors from 'tailwindcss/colors'

export default defineNuxtConfig({
    app: {
    head: {
      title: 'TDSTART', // default fallback title
      htmlAttrs: {
        lang: 'zh-CN',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
    }
  },
  
    //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@nuxtjs/tailwindcss',
    "nuxt-charts",
    'nuxt-auth-utils'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    // Options
    config: {
      theme: {
        extend: {
          colors: { primary: colors.green }
        }
      }
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
    $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  $env: {
    staging: {
      // 
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
