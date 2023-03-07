import { defineStore } from 'pinia'

export default defineStore('loadingStore', {
  state: () => ({
    isLoading: false
  }),
  actions: {
    loadingTrue () {
      this.isLoading = true
    },
    loadingFalse () {
      this.isLoading = false
    }
  }
})
