<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <h1 class="text-light text-center mb-5">最新活動</h1>
    <div class="mb-5">
      <div class="row py-4 text-light" v-for="product in latestProducts" :key="product.id"
         style="border-bottom: 1px solid #FFFFFF;">
        <div class="col-md-4">
          <div class="position-relative">
            <img :src="product.imageUrl" alt="" style="width: 100%;">
            <RouterLink :to="`/product/${product.id}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit; left: 0;">
            <h4 class="text-center text-light" style="margin-top: 30%;">了解更多</h4>
          </RouterLink>
          </div>
        </div>
        <div class="col-md-8 px-4">
          <h2 class="my-3 my-lg-4 text-truncate">{{ product.title }}</h2>
          <p class="product-description h5">{{ product.description }}</p>
          <div class="d-flex justify-content-end">
            <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary mt-3">了解更多</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsStore from '../../stores/productsStore'
import loadingStore from '../../stores/loadingStore'
import { mapState } from 'pinia'
const ProductsStore = productsStore()
export default {
  computed: {
    ...mapState(productsStore, ['latestProducts', 'pages']),
    ...mapState(loadingStore, ['isLoading'])
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
.product-description{
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
@media(max-width: 992px) {
    .product-description{
      -webkit-line-clamp: 1;
  }
}
@media(max-width: 768px) {
    .product-description{
      -webkit-line-clamp: 3;
  }
}

.more h4{
  display: none;
}
.more:hover h4{
  display: block;
}
.more:hover{
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}
</style>
