// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components: {
      ...components,
      ...labsComponents,
    },
    theme: {
      defaultTheme: 'dark'
    }
  })
  app.vueApp.use(vuetify)
})
