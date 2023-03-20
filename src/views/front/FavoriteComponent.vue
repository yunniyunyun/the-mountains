<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <h1 class="text-light text-center mb-5">收藏項目</h1>
    <div class="mb-5">
      <div class="row py-4 text-light" v-for="product in favoriteList.favoriteList" :key="product.id"
         style="border-bottom: 1px solid #FFFFFF;">
        <div class="col-md-3">
          <div class="position-relative">
            <img :src="product.product.imageUrl" alt="" style="width: 100%;">
            <RouterLink :to="`/product/${product.productId}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit; left: 0;">
            <h4 class="text-center text-light" style="margin-top: 30%;">了解更多</h4>
          </RouterLink>
          </div>
        </div>
        <div class="col-md-7 px-4">
          <h4 class="my-3 my-lg-4 text-truncate">{{ product.product.title }}</h4>
          <p class="product-description h5">{{ product.product.description }}</p>
          <div class="d-flex justify-content-end mt-3">
            <p class="h5"> 優惠價: <span class="h4" style="color: #F7B2B7;">{{ product.product.price }}</span> </p>
          </div>
        </div>
        <div class="col-2">
          <p class="p-3">{{  $filters.date(product.date) }} 加入收藏</p>
          <button type="button" class="ms-2 btn btn-primary" style="width: 100%;"
              @click="addToCart(product.product.id)">加入購物車</button>
          <button type="button" class="ms-2 btn btn-outline-danger mt-3" style="width: 100%;"
              @click="removeCartItem(product.id)">移除收藏</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import loadingStore from '../../stores/loadingStore'
import favoriteStore from '../../stores/favoriteStore'
import { mapState, mapActions } from 'pinia'
export default {
  computed: {
    ...mapState(loadingStore, ['isLoading']),
    ...mapState(favoriteStore, ['favoriteList', 'favorite'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(favoriteStore, ['removeCartItem'])
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
