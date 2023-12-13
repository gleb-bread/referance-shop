import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { init } from './shared/system/init'
import { loadFonts } from './plugins/webfontloader'
import { test } from './shared/system/test';

loadFonts()

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(init)
  .use(test)
  .mount('#app')
