import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
      'flex-between': 'flex justify-between items-center',
      'box-container': 'container mx-auto !lg:max-w-[1200px]',
      btn: 'rounded-2xl py-2 px-3 font-bold',
      'btn-secondary': 'bg-secondary',
      'btn-accent': 'rounded-3xl bg-accent text-white',
      'btn-accent-lg': 'px-9'
    }
  ],
  rules: [],
  theme: {
    colors: {
      primary: '#1F50F5',
      secondary: '#44FBDD',
      accent: '#F27406'
    }
  }
})
