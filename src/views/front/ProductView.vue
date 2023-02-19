<template>
    這是單一產品頁面
    <hr>
    <h1>{{ product.title }}</h1>
    <img :src="product.imageUrl" width="200" class="img-fluid" alt="">

</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    grtProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.grtProduct()
  }
}
</script>
