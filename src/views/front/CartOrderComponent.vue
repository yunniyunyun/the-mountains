<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="header"></div>
    <div class="container mb-5">
      <div class="d-flex justify-content-center text-secondary" style="margin-top: 60px;">
        <div class="position-relative m-4" style="width: 60%;">
          <div class="progress" style="height: 4px;">
            <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
          <h5 class="position-absolute" style="top: -26px; left: 10%; color: #1FBA82;">確認內容</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem; left: 33%;">2</button>
          <h5 class="position-absolute" style="top: -26px; left: 45%; color: #1FBA82;">填寫資料</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem; left: 66%;">3</button>
          <h5 class="position-absolute" style="top: -26px; left: 78%; color: #1FBA82;">訂單完成</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem ; height:2rem; left: 99%;"></button>
        </div>
      </div>
      <h2 class="mt-5 text-light text-center mb-3">訂單完成</h2>
      <div class="text-light text-center">
        <hr>
        <h5>訂單編號: {{ order_id_data.id }}</h5>
        <h4>訂單狀態:
          <span class="text-success" v-if="order_id_data.is_paid"> 已付款</span>
          <span class="text-danger" v-else style="line-height: 40px;">未付款
            <button type="button" class="btn btn-primary ms-3" @click="payOrder(order_data.data.orderId)">付款</button>
          </span>
        </h4>
        <img src="https://images.unsplash.com/photo-1543522933-b4894203e509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="deer-success" style="width: 50vw;">
        <div class="d-flex justify-content-center mt-4">
          <RouterLink to="/products" class="btn btn-outline-secondary" href="#">繼續逛逛</RouterLink>
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
    }
  },
  computed: {
    ...mapState(loadingStore, ['isLoading']),
    ...mapState(orderStore, ['order_data', 'order_id_data'])
  },
  methods: {
    ...mapActions(orderStore, ['payOrder'])
  },
  mounted () {
    LoadingStore.loadingTrue()
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
