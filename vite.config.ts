import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// vite.config.ts
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [uni(), UnoCSS()],
  })
}
