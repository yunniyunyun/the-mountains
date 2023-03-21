<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <h1 class="text-light text-center mb-5 d-none">收藏項目</h1>
    <p class="text-center"><img src="../../images/title/favorite-title.png" class="title-img" alt="logo"></p>
    <div class="mb-5" v-if="favoriteList?.favoriteList.length > 0">
      <div v-if="favoriteList.favoriteList[0]?.product?.imageUrl">
      <div class="row py-4 text-light" v-for="product in favoriteList.favoriteList" :key="product.id"
         style="border-bottom: 1px solid #FFFFFF;">
        <div class="col-md-3">
          <div class="position-relative">
            <p class="p-0 mb-0 d-lg-none text-secondary">{{  $filters.date(product.date) }} 收藏</p>
            <img :src="product.product.imageUrl" alt="" style="width: 100%;">
            <RouterLink :to="`/product/${product.productId}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit; left: 0;">
            <h4 class="text-center text-light" style="margin-top: 30%;">了解更多</h4>
          </RouterLink>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 px-4">
          <h4 class="my-3 my-lg-4 text-truncate">{{ product.product.title }}</h4>
          <p class="product-description h5">{{ product.product.description }}</p>
          <div class="d-flex justify-content-end mt-3">
            <p class="h5"> 優惠價: <span class="h4" style="color: #F7B2B7;">{{ product.product.price }}</span> </p>
          </div>
        </div>
        <div class="col-md-3 col-lg-2 d-flex d-md-block align-items-center">
          <p class="py-3 d-none d-lg-block">{{  $filters.date(product.date) }} 加入收藏</p>
          <button type="button" class="ms-md-2 btn btn-primary" style="width: 140px; height: 38px;"
              @click="addToCart(product.product.id)">加入購物車</button>
          <button type="button" class="ms-3 ms-md-2 btn btn-outline-danger mt-md-3 " style="width: 140px; height: 38px;"
              @click="removeFavoriteItem(product.id)">移除收藏</button>
        </div>
      </div>
    </div>
    </div>
    <div v-else class="d-flex align-items-center flex-column text-light mb-5">
      <div class="mb-2" style="max-width: 64px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-chat-square-heart" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z"/>
          <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
        </svg>
      </div>
      <p class="h5">目前無收藏項目</p>
    </div>
  </div>
</template>

<script>
import productsStore from '../../stores/productsStore'
import cartStore from '../../stores/cartStore'
import loadingStore from '../../stores/loadingStore'
import favoriteStore from '../../stores/favoriteStore'
import { mapState, mapActions } from 'pinia'

const ProductsStore = productsStore()

export default {
  computed: {
    ...mapState(loadingStore, ['isLoading']),
    ...mapState(favoriteStore, ['favoriteList', 'favorite'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(favoriteStore, ['removeFavoriteItem'])
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
</style>
