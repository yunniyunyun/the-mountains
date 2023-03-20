<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="header"></div>
    <div class="container mb-5">
      <div class="d-none d-md-flex justify-content-center text-secondary" style="margin-top: 60px;">
        <div class="position-relative m-4" style="width: 60%;">
          <div class="progress" style="height: 4px;">
            <div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
          <h5 class="position-absolute" style="top: -26px; left: calc((33% - 5rem)/2); color: #1FBA82;">確認內容</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem; left: 33%;">2</button>
          <h5 class="position-absolute" style="top: -26px; left: calc(32% + (33% - 5rem)/2)">填寫資料</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem; left: 66%;">3</button>
          <h5 class="position-absolute" style="top: -26px; left: calc(65% + (33% - 5rem)/2)">訂單完成</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem ; height:2rem; left: 99%;"></button>
        </div>
      </div>
      <h2 class="mt-5 text-light text-center mb-3">購物車內容</h2>
      <div class="text-end">
          <!-- <button class="btn btn-outline-danger" type="button"
                  @click="deleteCarts">清空購物車</button> -->
            </div>
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
                    <RouterLink :to="`/product/${item.product.id}`"><img
                        :src="item.product.imageUrl"
                        class="table-image me-3"
                        :alt="item.product.title"
                      /></RouterLink>
                    {{ item.product.title }}
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
      <div class="d-flex justify-content-end mt-4">
        <RouterLink to="/products" class="btn btn-outline-primary me-2">繼續購物</RouterLink>
        <template v-if="cart.length !== 0">
          <template v-if="cart.carts.length !== 0">
            <RouterLink to="/checkout" class="btn btn-primary">下一步 | 填寫資料</RouterLink>
          </template>
        </template>
      </div>
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
    ...mapActions(cartStore, ['deleteCart', 'updateCart', 'getCarts'])
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
</style>
