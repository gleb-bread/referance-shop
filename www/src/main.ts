import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { init } from './shared/system/init'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(init)
  .use(router)
  .use(vuetify)
  .mount('#app')
