<template>
    這是產品列表
    <loadingVue v-model:active="isLoading"/>
    <div class="bg-gray2 fixed-top" style="height: 80px; z-index: 4;"
         data-aos="fade" data-aos-anchor="#triggerAnchor" data-aos-offset="200"
         data-aos-duration="800" data-aos-mirror="true"></div>
    <table class="table" id="triggerAnchor">
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td><img :src="product.imageUrl" width="200" alt=""></td>
          <td>
            <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary">查看產品</RouterLink>
            <button type="button" class="ms-2 btn btn-outline-primary"
             @click="addToCart(product.id)">加入購物車</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
        })
        .catch((error) => {
          this.isLoading = false
          console.dir(error)
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  },
  mounted () {
    this.isLoading = true
    this.getProducts()
  }
}
</script>
