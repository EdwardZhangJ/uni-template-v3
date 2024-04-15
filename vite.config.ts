import path from 'path'
import {defineConfig, loadEnv} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// @see https://unocss.dev/
// import UnoCSS from 'unocss/vite'

import {VantResolver} from '@vant/auto-import-resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default ({command, mode}) => {
  const env = loadEnv(mode, path.resolve(process.cwd(), 'env'))

  return defineConfig({
    envDir: './env', // 自定义env目录
    plugins: [
      uni(),
      // UnoCSS(),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.join(process.cwd(), './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      hmr: true,
      port: Number.parseInt(env.VITE_APP_PORT, 10),
    },
  })
}
