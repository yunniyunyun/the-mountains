<template>
  <loadingVue v-model:active="loading"/>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="row mt-5 ">
      <div class="col-md-5 mb-3 mb-md-0">
        <img :src="product.imageUrl" class="img-fluid" alt="" style="width: 100%; height: 280px; object-fit: cover;">
      </div>
      <div class="col-md-7 text-light">
        <h1 class="mb-2">{{ product.title }}</h1>
        <div class="mb-3" v-if="product.tag">
          <span class="badge bg-primary me-2" style="font-size: 14px;"
              v-for="(label, key) in product.tag"
                          :key="key+'tag'">
                          {{ label }}
          </span>
        </div>
        <h5 class="text-secondary mb-3" v-if="product.start_time != product.end_time">
          {{ $filters.date(product.start_time) }} - {{ $filters.date(product.end_time) }}
        </h5>
        <h5 class="text-secondary mb-3" v-else>
          {{ $filters.date(product.start_time) }}
        </h5>
        <div class="h5 text-end" v-if="product.price === product.origin_price">{{ product.price }} 元</div>
        <div v-else class="d-flex align-items-end justify-content-end">
          <del class="h6 me-2"> NT$ {{ product.origin_price }} 元</del>
          <div class="h4"> NT$ {{ product.price }} 元</div>
        </div>
        <hr>
        <div class="d-flex justify-content-end">
          <div class="input-group input-group-sm" style="width: 120px;">
            <button type="button" class="btn btn-secondary" @click="qty-=1" :disabled="qty<=1">-</button>
            <input id="qty" v-model="qty" type="number" min="0" class="form-control" style="text-align: center;">
            <button type="button" class="btn btn-secondary" @click="qty+=1">+</button>
          </div>
          <button type="button" class="ms-2 btn btn-primary"
              @click="addToCart(product.id, qty)">加入購物車</button>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <button v-if="favoriteIDs?.product.includes(product.id)"
          type="button" class="ms-2 btn btn-cpink"
          @click="removeFavoriteItem(favoriteIDs?.favorite[favoriteIDs.product.findIndex((item) => item === product.id)])">已收藏</button>
          <button v-else type="button" class="ms-2 btn btn-outline-cpink"
              @click="addToFavorite(product.id)">收藏此項目</button>
          <button type="button" class="ms-2 btn btn-danger"
              @click="toCartPage(product.id, qty)">直接購買</button>
        </div>
      </div>
    </div>
    <div class="text-light p-5 bg-dark my-4">
      <h3>注意事項</h3>
      <ol class="mb-0 h5" style="line-height: 2em;">
        <li>本產品包含申請入山入園證，請提供正確的個人資料</li>
        <li>如有特殊病史，請備妥個人藥物</li>
        <li>互相照顧，謝絕獨行俠</li>
      </ol>
    </div>
    <div class="text-light p-3">
      <h3 class="mb-3">活動介紹</h3>
      <span class="mb-3 h6">{{ product.description }}</span>
    </div>
    <div class="d-flex justify-content-center my-5">
          <RouterLink to="/products" class="btn btn-outline-secondary">查看其他行程</RouterLink>
    </div>
  </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import loadingStore from '../../stores/loadingStore'
import favoriteStore from '../../stores/favoriteStore'
import { mapState, mapActions } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      loading: false,
      product: {},
      qty: 1
    }
  },
  computed: {
    ...mapState(loadingStore, ['isLoading']),
    ...mapState(favoriteStore, ['favoriteIDs'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'toCartPage']),
    ...mapActions(favoriteStore, ['addToFavorite', 'removeFavoriteItem']),
    grtProduct () {
      this.loading = true
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          this.loading = false
        })
    }
  },
  mounted () {
    this.loading = true
    this.grtProduct()
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
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
