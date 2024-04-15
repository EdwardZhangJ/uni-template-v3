import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo-store', {
  state: () => {
    return {
      someState: 'hello pinia',
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['someState'],
  },
})
