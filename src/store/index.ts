import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate' // 数据持久化


export function setupStore(app: App) {
  const pinia = createPinia()
  pinia.use(
    createPersistedState({
      storage: {
        getItem: uni.getStorageSync,
        setItem: uni.setStorageSync,
      },
    }),
  )
  app.use(pinia)


}
