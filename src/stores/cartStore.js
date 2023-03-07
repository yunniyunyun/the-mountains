import productsStore from './productsStore'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart (productId, qty = 1) {
      // 判斷id是否存在
      const cuurentCart = this.cart.find((item) => item.productId === productId)
      if (cuurentCart) {
        cuurentCart.qty += qty
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        })
      }
      Swal.fire({
        background: '#0A603C',
        // color: '#C2E7D9',
        color: '#FFFFFF',
        width: 350,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        title: '加入購物車'
      })
    },
    setCartQty (id, event) {
      const currentCart = this.cart.find((item) => item.id === id)
      currentCart.qty = event * 1
    },
    removeCartItem (id) {
      const index = this.cart.findIndex((item) => item.id === id)
      this.cart.splice(index, 1)
    }
  },
  getters: {
    cartList: ({ cart }) => {
      // 1. 購物車的品項資訊，需整合產品資訊
      // 2. 計算小計金額
      // 3. 提供總金額
      const { products } = productsStore()

      const carts = cart.map((item) => {
        // 單一產品取出
        const product = products.find((product) => product.id === item.productId)
        return {
          ...item,
          product,
          subtotal: product.price * item.qty
        }
      })

      const total = carts.reduce((a, b) => a + b.subtotal, 0)

      return {
        carts,
        total
      }
    }
  }
})
