<template>
  <loadingVue :active="isLoading"/>
  <div class="header"></div>
  <div class="container mb-5">
    <div class="d-none d-md-flex justify-content-center text-secondary" style="margin-top: 60px;">
      <div class="position-relative m-4" style="width: 60%;">
        <div class="progress" style="height: 4px;">
          <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill d-flex align-items-center justify-content-center" style="width: 2rem; height:2rem;">
          <div style="width: 0.5rem; height:0.5rem; background:#fff; border-radius: 99em;"></div>
        </button>
        <h5 class="position-absolute" style="top: -26px; left: calc((33% - 5rem)/2); color: #1FBA82;">1.確認內容</h5>
        <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill d-flex align-items-center justify-content-center" style="width: 2rem; height:2rem; left: 33%;">
          <div style="width: 0.5rem; height:0.5rem; background:#fff; border-radius: 99em;"></div>
        </button>
        <h5 class="position-absolute" style="top: -26px; left: calc(32% + (33% - 5rem)/2); color: #1FBA82;">2.填寫資料</h5>
        <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem; left: 66%;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
        <h5 class="position-absolute" style="top: -26px; left: calc(65% + (33% - 5rem)/2); color: #1FBA82;">3.訂單完成</h5>
        <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem ; height:2rem; left: 99%;">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-flag-fill position-absolute top-0 translate-middle-y" viewBox="0 0 16 16" style="left:0.5rem">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
          </svg>
        </button>
      </div>
    </div>
    <h2 class="mt-5 text-light text-center mb-3">訂單完成</h2>
    <div class="text-light text-center">
      <hr>
      <h5>訂單編號: {{ order_id_data.id }}</h5>
      <h4>訂單狀態:
        <span class="text-success" v-if="order_id_data.is_paid">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          已付款
        </span>
        <span class="text-danger" v-else style="line-height: 40px;">未付款
          <button type="button" class="btn btn-primary ms-3" @click="payOrder(order_data.data.orderId)">付款</button>
        </span>
      </h4>
      <p class="text-center" v-if="order_id_data.is_paid"><img src="../../images/title/pay-content.png" class="content-img" alt="logo"></p>
      <img src="https://images.unsplash.com/photo-1543522933-b4894203e509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="deer-success" style="width: 50vw;">
      <div class="d-flex justify-content-center mt-4">
        <RouterLink to="/products" class="btn btn-outline-secondary" href="#">繼續逛逛</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import loadingStore from '@/stores/loadingStore'
import orderStore from '@/stores/orderStore'
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
.content-img{
  height: 240px;
}
@media(max-width: 768px) {
  .content-img{
    height: 180px;
  }
}
@media(max-width: 576px) {
  .content-img{
    height: 120px;
  }
}
@media(max-width: 370px) {
  .content-img{
    width: 100%;
    height: auto;
  }
}
</style>
