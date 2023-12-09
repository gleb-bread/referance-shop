// Styles
import "@mdi/font/css/materialdesignicons.css";
import '@/app/styles/index.scss';
import { defaultTheme } from "./themes/defaultTheme";
import { darkThemeForBtn } from "./themes/darkThemeForBtn";
import { Aliases } from './componentsAliases/aliases';
import { defaultsConfig } from "./defaultsConfig/defaultConfig";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    aliases: Aliases,

    defaults: defaultsConfig,
    
    theme: {
        themes:{
            defaultTheme: defaultTheme,
            darkThemeForBtn: darkThemeForBtn,
        }
    }
});
