import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import productsStore from './productsStore.js'
import loadingStore from './loadingStore.js'
const { loadingTrue, loadingFalse } = loadingStore()

export default defineStore('favoriteStore', {
  state: () => ({
    favorite: []
  }),
  actions: {
    addToFavorite (productId) {
      loadingTrue()
      const getData = localStorage.getItem('favorite')
      if (getData) {
        this.favorite = JSON.parse(getData)
      }
      const cuurentFavorite = this.favorite.find((item) => item.productId === productId)
      if (!cuurentFavorite) {
        this.favorite.push({
          id: new Date().getTime(),
          date: new Date().getTime() / 1000,
          productId
        })
      }
      const favoriteString = JSON.stringify(this.favorite)
      localStorage.setItem('favorite', favoriteString)
      Swal.fire({
        background: '#E69597',
        color: '#FFFFFF',
        width: 350,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        title: '已收藏'
      })
      loadingFalse()
    },
    removeFavoriteItem (id) {
      let getData = localStorage.getItem('favorite')
      if (getData) {
        this.favorite = JSON.parse(getData)
      }
      const index = this.favorite.findIndex((item) => item.id === id)
      this.favorite.splice(index, 1)
      const favoriteString = JSON.stringify(this.favorite)
      localStorage.setItem('favorite', favoriteString)
      getData = localStorage.getItem('favorite')
      if (getData) {
        this.favorite = JSON.parse(getData)
      }
      Swal.fire({
        background: '#b47978',
        color: '#FFFFFF',
        width: 350,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        title: '已移除收藏'
      })
    }
  },
  getters: {
    favoriteList: ({ favorite }) => {
      const getData = localStorage.getItem('favorite')
      if (getData) {
        favorite = JSON.parse(getData)
      }
      const { products } = productsStore()

      const favoriteList = favorite.map((item) => {
        // 單一產品取出
        const product = products.find((product) => product.id === item.productId)
        return {
          ...item,
          product
        }
      })

      return {
        favoriteList
      }
    },
    favoriteIDs: ({ favorite }) => {
      const getData = localStorage.getItem('favorite')
      if (getData) {
        favorite = JSON.parse(getData)
      }
      const IDList = favorite.map((item) => {
        return item.productId
      })
      const favoriteIDList = favorite.map((item) => {
        return item.id
      })
      return {
        product: IDList,
        favorite: favoriteIDList
      }
    }
  }
})
