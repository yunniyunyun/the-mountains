<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <h1 class="text-light text-center mb-5 d-none">熱門活動</h1>
    <p class="text-center"><img src="../../images/title/hot-title.png" class="title-img" alt="logo"></p>
    <div class="mb-5">
      <div class="row py-4 text-light" v-for="(product, index) in hotProducts" :key="product.id"
         style="border-bottom: 1px solid #373737;">
        <div class="col-1">
          <h3 class="text-center position-relative" style="border: 3px solid #373737; border-radius: 50%; height: 50px; width: 50px; line-height: 50px; box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.4);">{{ index+1 }}.
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor"
            class="bi bi-fire text-danger position-absolute start-0 translate-middle-y" viewBox="0 0 16 16" style="top: -12px">
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
          </svg>
          </h3>
        </div>
        <div class="col-md-4">
          <div class="position-relative">
            <img :src="product.imageUrl" alt="" style="width: 100%;">
            <RouterLink :to="`/product/${product.id}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit; left: 0;">
            <h4 class="text-center text-light" style="margin-top: 30%;">了解更多</h4>
          </RouterLink>
          </div>
        </div>
        <div class="col-md-7 px-4">
          <h2 class="my-3 mt-lg-4 text-truncate">{{ product.title }}</h2>
          <div class="mb-3" v-if="product.tag">
            <span class="badge bg-primary me-2" style="font-size: 16px;"
                v-for="(label, key) in product.tag"
                            :key="key+'tag'">
                            {{ label }}
            </span>
          </div>
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
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.16);
}
</style>
