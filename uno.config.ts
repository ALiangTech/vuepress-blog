// uno.config.ts
import { defineConfig } from 'unocss'
import { presetWind, presetIcons } from 'unocss'
const themeColors = {
  'geekblue-1': '#f0f5ff',
  'geekblue-2': '#d6e4ff',
  'geekblue-3': '#adc6ff',
  'geekblue-4': '#85a5ff',
  'geekblue-5': '#597ef7',
  'geekblue-6': '#2f54eb',
  'geekblue-7': '#1d39c4',
  'geekblue-8': '#10239e',
  'geekblue-9': '#061178',
  'geekblue-10': '#030852',
}


export default defineConfig({
  presets: [
    presetWind(),
    presetIcons()
  ],
  theme: {
    colors: {
      ...themeColors,
      brand: {
        ...themeColors
      }
    }
  }
})