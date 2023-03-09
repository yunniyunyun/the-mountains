<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <div class="row row-cols-5 my-3 g-4">
      <div class="col card-group" v-for="product in hotProducts" :key="product.id">
        <div class="card">
          <RouterLink :to="`/product/${product.id}`">
          <img
            :src="product.imageUrl"
            class="card-img-top"
            alt="..."
            style="height: 150px;"
          /></RouterLink>
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-auto">
              {{product.title}}
            </h6>
            <span class="float-end text-end">$ {{product.price}}</span>
            <a href="#" class="btn btn-outline-primary w-100 mt-2" @click.prevent="addToCart(product.id)">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import productsStore from '../../stores/productsStore'
import loadingStore from '../../stores/loadingStore'
import { mapState, mapActions } from 'pinia'

const ProductsStore = productsStore()

export default {
  computed: {
    ...mapState(productsStore, ['hotProducts', 'pages']),
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    ProductsStore.getAllProducts()
  }
}
</script>

<style scoped>
.header{
  background-image: url(@/images/home/products.avif);
  background-position: 50% 65% ;
  background-size: cover;
  height: 30vh;
}
</style>
