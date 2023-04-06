<template>
    <loadingVue :active="isLoading"/>
    <div class="header"></div>
    <div class="container mb-5">
      <div class="d-none d-md-flex justify-content-center text-secondary" style="margin-top: 60px;">
        <div class="position-relative m-4" style="width: 60%;">
          <div class="progress" style="height: 4px;">
            <div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </button>
          <h5 class="position-absolute" style="top: -26px; left: calc((33% - 5rem)/2); color: #1FBA82;">1.確認內容</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem; left: 33%; pointer-events:none">
          </button>
          <h5 class="position-absolute" style="top: -26px; left: calc(32% + (33% - 5rem)/2)">2.填寫資料</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem; left: 66%; pointer-events:none"></button>
          <h5 class="position-absolute" style="top: -26px; left: calc(65% + (33% - 5rem)/2)">3.訂單完成</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem ; height:2rem; left: 99%; pointer-events:none"></button>
        </div>
      </div>
      <template v-if="Array.isArray(cart.carts) && cart.carts.length">
        <h2 class="mt-5 text-light text-center mb-3">購物車內容</h2>
        <div class="text-end">
          <button class="btn btn-outline-danger" type="button"
                  @click="deleteCarts">清空購物車</button>
        </div>
        <div class="d-none d-sm-block">
        <table class="table align-middle text-light">
          <thead>
              <tr>
              <th></th>
              <th>品名</th>
              <th>單價</th>
              <th style="width: 150px">數量</th>
              <th></th>
              </tr>
          </thead>
          <tbody>
              <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                        :disabled="item.id === loadingItem"
                        @click="deleteCart(item)">
                        <i class="fas fa-spinner fa-pulse"></i>
                        x
                    </button>
                  </td>
                  <td>
                    <div class="d-md-flex">
                      <RouterLink :to="`/product/${item.product.id}`"><img
                          :src="item.product.imageUrl"
                          class="table-image me-3"
                          :alt="item.product.title"
                        /></RouterLink>
                      <p>{{ item.product.title }}</p>
                    </div>
                  </td>
                  <td>
                    {{ item.product.price }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                        <select name="" id="" class="form-select" v-model="item.qty"
                        :disabled="item.id === loadingItem"
                        @change="(e) => updateCart(item)">
                        <template v-if="item.qty <= 10">
                          <option :value="i" v-for="i in 10" :key="`${i}qty`">{{ i }}</option>
                        </template>
                        <template v-else>
                          <option :value="i" v-for="i in item.qty" :key="i + 'qty'">{{ i }}</option>
                        </template>
                        </select>
                    </div>
                  </td>
                  <td class="text-end">
                    <small class="text-success">小計：</small>
                    {{ item.final_total }}
                  </td>
              </tr>
              </template>
          </tbody>
          <tfoot>
              <tr>
              <td></td>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
              </tr>
              <tr>
              <td></td>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
              </tr>
          </tfoot>
        </table>
        </div>
        <div class="d-sm-none text-light p-3">
            <div class="d-flex justify-content-center align-items-center mb-3" v-for="item in cart.carts" :key="item.id">
              <div class="bg-dark text-light" style="width: 100%;">
                  <div><img
                  :src="item.product.imageUrl"
                  alt="..."
                  style="width: 100%; height: 160px; object-fit:cover"
                  />
                  </div>
                <div class="d-flex flex-column p-3 justify-content-center">
                  <h5 class="mb-2">
                    {{ item.product.title }}
                  </h5>
                  <p>單價: {{ item.product.price }}</p>
                  <div class="mb-2 text-end d-flex justify-content-between align-items-star">
                    <div class="input-group input-group-sm" style="width: 120px;">
                        <select name="" id="" class="form-select" v-model="item.qty"
                        :disabled="item.id === loadingItem"
                        @change="(e) => updateCart(item)">
                        <template v-if="item.qty <= 10">
                          <option :value="i" v-for="i in 10" :key="`${i}qty`">{{ i }}</option>
                        </template>
                        <template v-else>
                          <option :value="i" v-for="i in item.qty" :key="i + 'qty'">{{ i }}</option>
                        </template>
                        </select>
                    </div>
                    <p class="mb-0 h5"><small class="text-success ">小計：</small> {{ item.final_total }}</p>
                  </div>
                </div>
              </div>
            </div>
            <h5 class="mt-3 text-end">總計: {{ cart.total }}</h5>
            <h5 class="mt-3 text-end text-success">折扣價: {{ cart.final_total }}</h5>
      </div>
        <div class="d-flex justify-content-end mt-4">
          <RouterLink to="/products" class="btn btn-outline-primary me-2">繼續購物</RouterLink>
          <RouterLink to="/checkout" class="btn btn-primary">下一步 | 填寫資料</RouterLink>
        </div>
      </template>
      <template v-else>
        <p class="text-center"><img src="../../images/title/cart-empty-title.png" class="title-img" alt="logo"></p>
        <div class="d-flex justify-content-center" style="margin-top: -24px;">
          <RouterLink to="/products" class="btn btn-primary me-2 btn-lg">挑行程</RouterLink>
        </div>
      </template>
    </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import loadingStore from '../../stores/loadingStore'
import { mapState, mapActions } from 'pinia'

const CartStore = cartStore()

export default {
  data () {
    return {
      products: [],
      loadingItem: ''
    }
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'updateCart', 'getCarts', 'deleteCarts'])
  },
  mounted () {
    CartStore.getCarts()
  }
}
</script>

<style scoped>
.header{
  background-image: url(@/images/home/carts2.avif);
  background-position: 50% 23% ;
  background-size: cover;
  height: 30vh;
}
.title-img{
  height: 300px;
}
@media(max-width: 768px) {
  .title-img{
    height: 250px;
  }
}
@media(max-width: 576px) {
  .title-img{
    height: 200px;
  }
}
@media(max-width: 370px) {
  .title-img{
    width: 100%;
    height: auto;
  }
}
.table-image{
  height: 100px;
  object-fit: cover;
  width: 150px;
}
@media(max-width: 576px) {
  .table-image{
  height: 60px;
  width: 80px;
}
}
@media(max-width: 370px) {
  .table-image{
    display: none;
  }
}
</style>
