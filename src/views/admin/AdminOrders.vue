<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="container">
        <h2 class="mt-4">產品列表</h2>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
              <th width="150">
                下定時間
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
              <th width="100">
                訂單狀態
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td> {{ order.create_at }} </td>
                <td> {{ order.user.email }} </td>
                <td> {{ order.user.tel }}</td>
                <td>
                    <div v-for="product in order.products" :key="product.id">
                        {{ product.product.title }} ( 數量: {{ product.qty }} )
                    </div>
                </td>
                <td> {{ order.total }}</td>
                <td>
                    <span class="text-success" v-if="order.is_paid">已付款</span>
                    <span v-else>未付款</span>
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

    <!-- delete order -->
    <DeleteOrderModal :temp-order="tempOrder" :delete-order="deleteOrder"></DeleteOrderModal>
</template>

<script>
import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationVue.vue'
import DeleteOrderModal from '../../components/DeleteOrderModal.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      orders: [],
      page: {},
      tempOrder: '',
      OrderModal: '',
      delOrderModal: ''
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
          alert(error.response.data.message)
          window.location = 'login.html'
        })
    },
    getOrder (page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/?page=${page}`
      this.$http.get(url)
        .then((response) => {
          this.isLoading = false
          this.orders = response.data.orders
          this.page = response.data.pagination
        })
        .catch((error) => {
          this.isLoading = false
          alert(error.response.data.message)
        })
    },
    deleteOrder () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then((response) => {
          this.delOrderModal.hide()
          alert(response.data.message)
          this.getOrder()
        })
        .catch((error) => {
          alert(error.data.message)
        })
    },
    openModal (state, item) {
      if (state === 'edit') {
        this.tempOrder = { ...item }
        this.OrderModal.show()
      } else if (state === 'delete') {
        this.tempOrder = { ...item }
        this.delOrderModal.show()
      }
    }
  },
  components: {
    pagination,
    DeleteOrderModal
  },
  mounted () {
    this.isLoading = true

    this.delOrderModal = new Modal(document.getElementById('delOrderModal'), {
      keyboard: false
    })
    // Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}

</script>
