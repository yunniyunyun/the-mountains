<template>
  <loadingVue :active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <h1 class="text-light text-center mb-5 d-none">最新活動</h1>
    <p class="text-center"><img src="../../images/title/random-title.png" class="title-img" alt="logo"></p>
    <div class="mb-5">
      <div class="product-card row py-4 text-light mb-3 shadow position-relative p-0" v-for="product in randomProducts" :key="product.id"
         style="border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 10px;">
        <div class="col-md-4">
          <div class="position-relative">
            <img :src="product.imageUrl" :alt="product.title" style="width: 100%; max-height: 300px; Object-fit: cover">
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
import productsStore from '@/stores/productsStore'
import loadingStore from '@/stores/loadingStore'
import { mapState } from 'pinia'
const ProductsStore = productsStore()
export default {
  computed: {
    ...mapState(productsStore, ['randomProducts', 'pages']),
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
.title-img{
  height: 140px;
}
@media(max-width: 768px) {
  .title-img{
    height: 120px;
  }
}
@media(max-width: 576px) {
  .title-img{
    height: 100px;
  }
}
@media(max-width: 370px) {
  .title-img{
    width: 100%;
    height: auto;
  }
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
.product-card:hover{
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.75) !important;
}
</style>
