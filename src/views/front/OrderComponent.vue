<template>
  <loadingVue :active="isLoading"/>
  <div class="header"></div>
  <div class="container mb-5 d-flex justify-content-center">
    <div class="text-light" style="width: 60vw;">
      <h2 class="mt-5 text-light text-center mb-3">訂單查詢</h2>
      <hr>
      <div v-if="order_id_data.id">
        <h5 class="mb-3">訂單編號: {{ order_id_data.id }}</h5>
        <h5 class="mb-3">訂單狀態:
          <span class="text-success" v-if="order_id_data.is_paid">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          已付款
        </span>
          <span class="text-danger" v-else style="line-height: 40px;">未付款
            <button type="button" class="btn btn-primary ms-3" @click="payOrder(order_id_data.id)">付款</button>
          </span>
        </h5>
        <h5>訂購人資訊</h5>
        <div class="ms-3 mb-3">
          <div>Email: {{ order_id_data.user.email }}</div>
          <div>姓名: {{ order_id_data.user.name }}</div>
          <div>電話: {{ order_id_data.user.tel }}</div>
          <div>地址: {{ order_id_data.user.address }}</div>
        </div>
        <h5>訂單內容: </h5>
        <table class="table align-middle text-light d-none d-md-block">
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
                <div class="row row-cols-1 row-cols-lg-2">
                  <img
                      :src="item.product.imageUrl"
                      class="table-image d-none d-sm-inline col pe-0"
                      :alt="item.product.title"
                      style="height: 100px; object-fit: cover; max-width: 150px;"
                    />
                  <p class="col mt-1 mt-lg-0">{{ item.product.title }}</p>
                </div>
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
        <div class="d-md-none">
          <div class="d-flex justify-content-center align-items-center mb-3" v-for="item in order_id_data.products" :key="item.id">
            <div class="bg-dark text-light w-100">
                <div class="position-relative">
                  <img
                :src="item.product.imageUrl"
                :alt="item.product.title"
                class="w-100"
                style="height: 160px; object-fit:cover"
                />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white fz-16">{{ item.qty }}</span>
              </div>
              <div class="d-flex flex-column p-3 justify-content-center">
                <h5 class="mb-2">
                  {{ item.product.title }}
                </h5>
                <p class="mb-2 text-end">
                  {{ item.final_total }}
                </p>
              </div>
            </div>
          </div>
          <h5 class="mt-3 text-end">總計: {{ order_id_data.total }}</h5>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button type="button" class="btn btn-outline-secondary me-3" @click="order_id_data={}, orederID=''">再查一筆</button>
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
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      orederID: '',
      order_id_data: {}
    }
  },
  methods: {
    getOrder (id) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${id}`
      this.$http.get(url)
        .then((response) => {
          this.order_id_data = response.data.order
          if (!this.order_id_data) {
            this.isLoading = false
            Swal.fire({
              icon: 'error',
              title: '訂單不存在'
            })
          }
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response
          })
        })
    },
    payOrder (orderId) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${orderId}`
      this.$http.post(url)
        .then((response) => {
          this.getOrder(this.order_id_data.id)
          Swal.fire({
            icon: 'success',
            title: '付款成功'
          })
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
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
