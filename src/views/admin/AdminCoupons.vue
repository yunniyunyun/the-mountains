<template>
<loadingVue v-model:active="isLoading"/>
    <div class="container">
      <div class="mt-4 d-flex justify-content-between align-items-end">
          <h2 class="mt-4">優惠券</h2>
          <div>
            <button class="btn btn-primary" @click="openModal('new', tempCoupon)">
              新增優惠券
            </button>
          </div>
      </div>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
              <th width="150">
                名稱
              </th>
              <th width="220">
                使用期限
              </th>
              <th width="100">
                折扣百分比
              </th>
              <th width="120">
                優惠券狀態
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coupon in coupons" :key="coupon.id">
                <td> {{ coupon.title }} </td>
                <td> {{ $filters.date(coupon.due_date) }} </td>
                <td> {{ coupon.percent }}% </td>
                <td>
                  <span v-if="coupon.is_enabled === 1" class="text-success">啟用</span>
                  <span v-else class="text-muted">未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary btn-sm"
                       @click="openModal('edit', coupon)">
                        編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                      @click="openModal('delete', coupon)">
                        刪除
                    </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

     <!-- update coupon -->
     <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
        aria-hidden="true">
      <VForm v-slot="{ errors }" @submit="updateCoupon">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="couponModalLabel" class="modal-title">
                  <span v-if="isNew">新增優惠券</span>
                  <span v-else>編輯優惠券</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="title">標題</label>
                <VField name="title" type="text" class="form-control" id="title" v-model="tempCoupon.title"
                        rules="required" :class="{ 'is-invalid': errors['title'] }"
                        placeholder="請輸入標題"></VField>
                <ErrorMessage name="title" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="coupon_code">優惠碼</label>
                <VField name="coupon_code" type="text" class="form-control" id="coupon_code"
                        rules="required" :class="{ 'is-invalid': errors['coupon_code'] }"
                        v-model="tempCoupon.code"
                        placeholder="請輸入優惠碼"></VField>
                <ErrorMessage name="coupon_code" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="due_date">到期日</label>
                <VField name="due_date" type="date" class="form-control" id="due_date"
                        :rules="isDate" :class="{ 'is-invalid': errors['due_date'] }"
                        v-model="due_date"></VField>
                <ErrorMessage name="due_date" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="price">折扣百分比</label>
                <VField name="price" type="number" class="form-control" id="price"
                        :rules="isPercentage"  :class="{ 'is-invalid': errors['price'] }"
                        v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比"></VField>
                <ErrorMessage name="price" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        v-model="tempCoupon.is_enabled" id="is_enabled">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button v-if="isNew" type="button" class="btn btn-primary" @click="updateCoupon">
                  新增優惠券
                </button>
                <button v-else type="button" class="btn btn-primary" @click="updateCoupon">
                  更新優惠券
                </button>
            </div>
            </div>
        </div>
      </VForm>
    </div>
    <!-- delete coupon -->
    <DeleteModal :item="tempCoupon" :delete-item="deleteCoupon"></DeleteModal>

    <pagination :pages="page" :get-products="getCoupons" @change-page="getCoupons"></pagination>
</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationVue.vue'
import DeleteModal from '../../components/DeleteModal.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      isNew: false,
      coupons: {},
      page: {},
      tempCoupon: {
        is_enabled: 0
      },
      due_date: '',
      couponModal: '',
      delCouponModal: '',
      state: ''
    }
  },
  methods: {
    checkLogin () {
      const url = `${VITE_APP_URL}/api/user/check`
      this.$http.post(url)
        .then(() => {
          this.getCoupons()
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
          window.location = 'login.html'
        })
    },
    getCoupons (page = 1) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons/?page=${page}`
      this.$http.get(url)
        .then((response) => {
          this.isLoading = false
          this.coupons = response.data.coupons
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
    updateCoupon () {
      this.isLoading = true
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`
      if (this.isNew) {
        this.$http.post(url, { data: this.tempCoupon })
          .then((response) => {
            this.couponModal.hide()
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.getCoupons()
            this.isLoading = false
          })
          .catch((error) => {
            this.isLoading = false
            Swal.fire({
              icon: 'error',
              title: error.response.data.message
            })
          })
      } else {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon })
          .then((response) => {
            this.couponModal.hide()
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.getCoupons()
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
    deleteCoupon () {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(url)
        .then((response) => {
          this.delCouponModal.hide()
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.getCoupons()
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
      if (state === 'new') {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0
        }
        this.due_date = ''
        this.isNew = true
        this.couponModal.show()
      } else if (state === 'edit') {
        this.tempCoupon = { ...item }
        this.isNew = false
        this.couponModal.show()
      } else if (state === 'delete') {
        this.tempCoupon = { ...item }
        this.delCouponModal.show()
      }
    },
    isPercentage (value) {
      if (!value) {
        return '此為必填'
      } else if (value > 100) {
        return '折扣不可大於100%'
      } else if (value < 0) {
        return '折扣不可為負值'
      } else {
        return true
      }
    },
    isDate (value) {
      const toDay = new Date().getTime() / 1000
      const dateAndTime = new Date(toDay * 1000)
        .toISOString().split('T')
      if (value < dateAndTime[0]) {
        return '無效時間'
      } else {
        return true
      }
    }
  },
  components: {
    pagination,
    DeleteModal
  },
  watch: {
    tempCoupon () {
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mounted () {
    this.isLoading = true

    this.couponModal = new Modal(document.getElementById('couponModal'), {
      keyboard: false
    })

    this.delCouponModal = new Modal(document.getElementById('delModal'), {
      keyboard: false
    })

    // Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}

</script>
