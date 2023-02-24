<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="container">
      <div class="mt-4 d-flex justify-content-between align-items-end">
        <h2 class="mt-4">訂單列表</h2>
        <div>
          <button class="btn btn-outline-danger" @click="openModal('deleteAll', {})">
              刪除全部訂單
          </button>
        </div>
      </div>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
              <th width="150">
                訂單時間
              </th>
              <th width="220">
                Email
              </th>
              <th width="120">
                電話
              </th>
              <th>
                品項
              </th>
              <th width="100">
                訂單金額
              </th>
              <th width="120">
                訂單狀態
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td> {{ $filters.date(order.create_at) }} </td>
                <td> {{ order.user.email }} </td>
                <td> {{ order.user.tel }}</td>
                <td>
                    <div v-for="product in order.products" :key="product.id">
                        {{ product.product.title }} ( 數量: {{ product.qty }} )
                    </div>
                </td>
                <td> {{ order.total }}</td>
                <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :id="`paidSwitch${order.id}`"
                        v-model="order.is_paid"
                        @change="updatePaid(order)"
                      />
                      <label class="form-check-label" :for="`paidSwitch${order.id}`">
                        <span class="text-success" v-if="order.is_paid">已付款</span>
                        <span v-else>未付款</span>
                      </label>
                    </div>
                </td>
                <td>
                    <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary btn-sm"
                       @click="openModal('edit', order)">
                        編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                      @click="openModal('delete', order)">
                        刪除
                    </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- pagination -->
    <pagination :pages="page" :get-products="getOrder" @change-page="getOrder"></pagination>

    <!-- update order -->
    <div id="orderModal" ref="orderModal" class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="orderModalLabel" class="modal-title">
                <span >編輯訂單</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                  <div class="col-sm-4">
                      <div class="mb-3">
                        <h4>訂購人資訊</h4>
                        <table class="table">
                          <tbody v-if="tempOrder.user">
                            <tr>
                              <th style="width: 100px">姓名</th>
                              <td>{{ tempOrder.user.name }}</td>
                            </tr>
                            <tr>
                              <th>Email</th>
                              <td>{{ tempOrder.user.email }}</td>
                            </tr>
                            <tr>
                              <th>電話</th>
                              <td>{{ tempOrder.user.tel }}</td>
                            </tr>
                            <tr>
                              <th>地址</th>
                              <td>{{ tempOrder.user.address }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                  <div class="col-sm-8">
                    <h4>訂單資訊</h4>
                    <table class="table">
                      <tbody>
                        <tr>
                          <th style="width: 100px">訂單編號</th>
                          <td>{{ tempOrder.id }}</td>
                        </tr>
                        <tr>
                          <th>訂購時間</th>
                          <td>{{ $filters.date(tempOrder.create_at) }}</td>
                        </tr>
                        <tr>
                          <th>付款時間</th>
                          <td>
                            <span v-if="tempOrder.paid_date">
                              {{ $filters.date(tempOrder.paid_date) }}
                            </span>
                            <span v-else></span>
                          </td>
                        </tr>
                        <tr>
                          <th>付款狀態</th>
                          <td>
                            <strong v-if="tempOrder.is_paid" class="text-success"
                              >已付款</strong
                            >
                            <span v-else class="text-muted">尚未付款</span>
                          </td>
                        </tr>
                        <tr>
                          <th>總金額</th>
                          <td>
                            {{ tempOrder.total }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h4>訂單內容</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>名稱</th>
                          <th>數量</th>
                          <th>小計</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in tempOrder.products" :key="item.id">
                          <th>
                            <img :src="item.product.imageUrl" class="img-fluid" alt="" style="height: 120px;">
                          </th>
                          <th>
                            {{ item.product.title }}
                          </th>
                          <td>{{ item.qty }}  {{ item.product.unit }}</td>
                          <td class="text-end">
                            {{ item.final_total }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h4>留言</h4>
                    <div>
                      <textarea id="message" class="form-control" cols="30" rows="5" v-model="tempOrder.message"></textarea>
                    </div>
                    <div class="d-flex justify-content-end mt-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          v-model="tempOrder.is_paid"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          <span v-if="tempOrder.is_paid">已付款</span>
                          <span v-else>未付款</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-primary" @click="updateOrder">
                  修改訂單
                </button>
            </div>
            </div>
        </div>
    </div>

    <!-- delete order -->
    <DeleteOrderModal :temp-order="tempOrder" :delete-order="deleteOrder"></DeleteOrderModal>
    <!-- delete all -->
    <DeleteAllModal :delete-item="deleteOrders"></DeleteAllModal>
</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationVue.vue'
import DeleteOrderModal from '../../components/DeleteOrderModal.vue'
import DeleteAllModal from '../../components/DeleteAllModal.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      orders: [],
      page: {},
      tempOrder: '',
      orderModal: '',
      delOrderModal: '',
      delAllModal: ''
    }
  },
  methods: {
    checkLogin () {
      const url = `${VITE_APP_URL}/api/user/check`
      this.$http.post(url)
        .then(() => {
          this.getOrder()
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
          window.location = 'login.html'
        })
    },
    getOrder (page = 1) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/?page=${page}`
      this.$http.get(url)
        .then((response) => {
          this.isLoading = false
          this.orders = response.data.orders
          this.page = response.data.pagination
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    updatePaid (order) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${order.id}`
      const paid = {
        is_paid: order.is_paid
      }
      this.$http.put(url, { data: paid })
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.getOrder()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    updateOrder () {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.put(url, { data: this.tempOrder })
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.orderModal.hide()
          this.getOrder()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    deleteOrders () {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/all`
      this.$http.delete(url)
        .then((response) => {
          this.delAllModal.hide()
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.getOrder()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    deleteOrder () {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then((response) => {
          this.delOrderModal.hide()
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.getOrder()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    openModal (state, item) {
      if (state === 'edit') {
        this.tempOrder = { ...item }
        this.orderModal.show()
      } else if (state === 'delete') {
        this.tempOrder = { ...item }
        this.delOrderModal.show()
      } else if (state === 'deleteAll') {
        this.delAllModal.show()
      }
    }
  },
  components: {
    pagination,
    DeleteOrderModal,
    DeleteAllModal
  },
  mounted () {
    this.isLoading = true

    this.orderModal = new Modal(document.getElementById('orderModal'), {
      keyboard: false
    })

    this.delOrderModal = new Modal(document.getElementById('delOrderModal'), {
      keyboard: false
    })

    this.delAllModal = new Modal(document.getElementById('delAllModal'), {
      keyboard: false
    })
    // Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}

</script>
