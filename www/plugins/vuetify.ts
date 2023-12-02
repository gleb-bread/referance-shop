import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin((app) => {

  const vuetify = createVuetify({
    ssr: true,
    aliases: vuetifyAliases,
    defaults,
    // add theme
    theme: {
      defaultTheme: PRIMARY_THEME,
      themes: {
        light,
        dark,
        primaryTheme,
      },
      // add color variations
      //   variations: {
      //     colors: ["primary", "secondary"],
      //     lighten: 3,
      //     darken: 3,
      //   },
    },
    // Add the custom iconset
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });

  app.vueApp
    .use(vuetify);
});
