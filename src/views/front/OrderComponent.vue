<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="header"></div>
    <div class="container mb-5 d-flex justify-content-center">
      <div class="text-light" style="width: 60vw;">
        <h2 class="mt-5 text-light text-center mb-3">訂單查詢</h2>
        <hr>
        <div v-if="!clean">
          <h5 class="mb-3">訂單編號: {{ order_id_data.id }}</h5>
          <h5 class="mb-3">訂單狀態:
            <span class="text-success" v-if="order_id_data.is_paid"> 已付款</span>
            <span class="text-danger" v-else style="line-height: 40px;">未付款
              <button type="button" class="btn btn-primary ms-3" @click="payOrder(order_id_data.id)">付款</button>
            </span>
          </h5>
          <h5>訂夠人資訊</h5>
          <div class="ms-3 mb-3">
            <div>Email: {{ order_id_data.user.email }}</div>
            <div>姓名: {{ order_id_data.user.name }}</div>
            <div>電話: {{ order_id_data.user.tel }}</div>
            <div>地址: {{ order_id_data.user.address }}</div>
          </div>
          <h5>訂單內容: </h5>
          <table class="table align-middle text-light">
            <thead>
                <tr>
                <th>品名</th>
                <th>單價</th>
                <th style="width: 150px">數量/單位</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in order_id_data.products" :key="item.id">
                    <td>
                      <img
                          :src="item.product.imageUrl"
                          class="table-image me-3 d-none d-sm-inline"
                          :alt="item.product.title"
                          style="height: 100px; object-fit: cover; max-width: 150px;"
                        />
                      {{ item.product.title }}
                    </td>
                    <td>
                      {{ item.product.price }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                          <p>{{ item.qty }}</p>
                      </div>
                    </td>
                    <td class="text-end">
                      <small class="text-success">小計：</small>
                      {{ item.final_total }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ order_id_data.total }}</td>
                </tr>
            </tfoot>
          </table>
          <div class="d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-outline-secondary me-3" @click="cleanOrder">再查一筆</button>
            <RouterLink to="/products" class="btn btn-outline-secondary" href="#">繼續逛逛</RouterLink>
          </div>
        </div>
        <div v-else>
          <div class="mb-3 d-md-flex justify-content-center align-items-center">
              <label for="origin_price" class="form-label" style="width: 120px;">輸入訂單編號</label>
              <input id="origin_price" v-model="orederID" type="text" class="form-control" placeholder="請輸入訂單編號" style="max-width: 280px;">
              <button type="button" class="btn btn-outline-secondary ms-md-3 mt-4 mt-md-0" @click="getOrder(orederID)">查詢</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import loadingStore from '../../stores/loadingStore'
import orderStore from '../../stores/orderStore'
import { mapState, mapActions } from 'pinia'

const LoadingStore = loadingStore()

export default {
  data () {
    return {
      orederID: ''
    }
  },
  computed: {
    ...mapState(loadingStore, ['isLoading']),
    ...mapState(orderStore, ['order_id_data', 'clean'])
  },
  methods: {
    ...mapActions(orderStore, ['payOrder', 'getOrder', 'cleanOrder'])
  },
  mounted () {
    LoadingStore.loadingTrue()
    LoadingStore.loadingFalse()
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
</style>
