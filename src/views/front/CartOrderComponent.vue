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
        <h5> 訂單編號: </h5>
        <div class="d-flex justify-content-center mt-4">
          <button type="button" class="btn btn-primary" @click="payOrder">付款</button>
        </div>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import loadingStore from '../../stores/loadingStore'
import { mapState } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    payOrder (order) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${order.id}`
      this.$http.post(url)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: '付款成功'
          })
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    }
  },
  mounted () {
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
