import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const LIGHT_THEME = "light";
// Light mode theme
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: twColors.indigo[600],
    secondary: twColors.purple[600],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
};

// String that represents the name of the dark theme I am using
export const DARK_THEME = "dark";
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: twColors.slate[950],
    surface: twColors.slate[900],
    primary: twColors.indigo[500],
    secondary: twColors.purple[500],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
};

export const PRIMARY_THEME = 'primaryTheme'; 

export const primaryTheme: ThemeDefinition = {
  dark: false,

  colors: {
    background: twColors.indigo[50],
    surface: twColors.lime[900],
    primary: twColors.orange[500],
    secondary: twColors.orange[700],
    error: twColors.red[700],
    info: twColors.teal[700],
    success: twColors.lime[700],
    warning: twColors.yellow[900],
  }
};
