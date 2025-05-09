import daisyui from "daisyui";

export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    mylight: {
      "primary": "#570DF8",
      "secondary": "#F000B8",
      "accent": "#37CDBE",
      "neutral": "#3D4451",
      "base-100": "#ffffff",
      "info": "#3ABFF8",
      "success": "#36D399",
      "warning": "#FBBD23",
      "error": "#F87272",
    },
    mydark: {
      "primary": "#661AE6",
      "secondary": "#D926A9",
      "accent": "#1FB2A6",
      "neutral": "#191D24",
      "base-100": "#2A303C",
      "info": "#3ABFF8",
      "success": "#36D399",
      "warning": "#FBBD23",
      "error": "#F87272",
    },
  },
}