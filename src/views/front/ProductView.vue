<template>
  <loadingVue v-model:active="loading"/>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="row mt-5 ">
      <div class="col-5">
        <img :src="product.imageUrl" class="img-fluid" alt="" style="width: 100%; height: 280px; object-fit: cover;">
      </div>
      <div class="col-7 text-light">
        <h1 class="mb-2">{{ product.title }}</h1>
        <div class="mb-3" v-if="product.tag">
          <span class="badge bg-primary me-2" style="font-size: 14px;"
              v-for="(label, key) in product.tag"
                          :key="key+'tag'">
                          {{ label }}
          </span>
        </div>
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
      </div>
    </div>
    <div class="text-light">
      <span class="mb-3">{{ product.description }}</span>
    </div>
    <div class="d-flex justify-content-center my-5">
          <RouterLink to="/products" class="btn btn-outline-secondary" href="#">查看其他行程</RouterLink>
    </div>
  </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import loadingStore from '../../stores/loadingStore'
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
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
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
