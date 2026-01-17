/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Fondo oscuro técnico (tipo AutoCAD dark mode)
        "tech-bg": "#0a0a0a",
        "tech-surface": "#171717",
        // Acentos
        "mate-green": "#00ff9d", // El color del código / terminal
        copper: "#b87333", // El color del hardware / cables
      },
      fontFamily: {
        // Fuentes que vamos a importar
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        // Un patrón de cuadrícula sutil para fondo técnico
        "grid-pattern":
          "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
