import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: ['variant', '&:not(.light *)'],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#907af7',
          200: '#5e1dd5',
        },
        test: '#6716DE',
        titan: {
          '50': '#f5f3ff',
          '100': '#efecfe',
          '200': '#dcd6fe',
          '300': '#c2b6fc',
          '400': '#a48cf9',
          '500': '#875df5',
          '600': '#783bec',
          '700': '#6929d8',
          '800': '#5722b5',
          '900': '#491e94',
          '950': '#2c1164',
        },
      },
    },
  },
}
