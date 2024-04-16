import {createSSRApp} from 'vue'
import App from './App.vue'
import {setupStore} from './store'

// @see https://unocss.dev/
// import 'virtual:uno.css'
// @see https://vant-ui.github.io/vant/#/zh-CN
import 'vant/lib/index.css'

export function createApp() {
  const app = createSSRApp(App)

  setupStore(app)

  return {
    app,
  }
}
