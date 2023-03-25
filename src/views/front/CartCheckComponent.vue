<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="header"></div>
    <div class="container mb-5">
      <div class="d-none d-md-flex justify-content-center text-secondary" style="margin-top: 60px;">
        <div class="position-relative m-4" style="width: 60%;">
          <div class="progress" style="height: 4px;">
            <div class="progress-bar" role="progressbar" style="width: 66%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill d-flex align-items-center justify-content-center" style="width: 2rem; height:2rem;">
            <div style="width: 0.5rem; height:0.5rem; background:#fff; border-radius: 99em;"></div>
          </button>
          <h5 class="position-absolute" style="top: -26px; left: calc((33% - 5rem)/2); color: #1FBA82;">1.確認內容</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem; left: 33%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </button>
          <h5 class="position-absolute" style="top: -26px; left: calc(32% + (33% - 5rem)/2); color: #1FBA82;">2.填寫資料</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem; left: 66%;">
          </button>
          <h5 class="position-absolute" style="top: -26px; left: calc(65% + (33% - 5rem)/2);">3.訂單完成</h5>
          <button type="button" class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem ; height:2rem; left: 99%;"></button>
        </div>
      </div>
      <h2 class="mt-5 text-light text-center mb-4">訂單資料</h2>
      <div class="row text-light">
        <div class="col-1"></div>
        <VForm ref="form" class="col-md-5" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3 row">
            <label for="email" class="form-label col-3">Email*</label>
            <v-field id="email" name="Email" type="email" class="form-control col"
                      rules="email|required"
                      v-model="order.user.email"
                      :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入 Email"
                      style="margin-right: 12px;"
                    ></v-field>
            <error-message name="Email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3 row">
            <label for="name" class="form-label col-3">收件人姓名*</label>
            <v-field id="name" name="姓名" type="text" class="form-control col" :class="{ 'is-invalid': errors['姓名'] }"
            v-model="order.user.name"
                      placeholder="請輸入姓名" rules="required" style="margin-right: 12px;"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3 row">
            <label for="tel" class="form-label col-3">收件人電話*</label>
            <v-field id="tel" name="電話" type="text" class="form-control col" :class="{ 'is-invalid': errors['電話'] }"
            :rules="isPhone"
            v-model="order.user.tel"
                      placeholder="請輸入電話" style="margin-right: 12px;"></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3 row">
            <label for="address" class="form-label col-3">收件人地址*</label>
            <v-field id="address" name="地址" type="text" class="form-control col" :class="{ 'is-invalid': errors['地址'] }"
            v-model="order.user.address" style="margin-right: 12px;"
                      placeholder="請輸入地址" rules="required" ></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="5" v-model="order.message"></textarea>
          </div>
          <div class="text-end">
            <div class="d-flex justify-content-end mt-4">
            <RouterLink to="/cart" class="btn btn-outline-primary me-2">上一步</RouterLink>
            <button  href="#" type="submit" class="btn btn-primary">下一步 | 確認訂單</button>
          </div>
          </div>
        </VForm>
        <div class="col-1"></div>
        <div class="d-none d-md-block col-4">
          <table class="table align-middle text-light sticky-top" style="top: 80px; z-index: -5;">
            <tbody>
                <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <div class="position-relative" style="height: 80px; width: 120px;">
                      <img
                          :src="item.product.imageUrl"
                          class="table-image me-3"
                          :alt="item.product.title"
                          style="height: 80px; object-fit: cover; width: 120px;"
                        /><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{{ item.qty }}</span>
                      </div>
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td class="text-end">
                      {{ item.final_total }}
                    </td>
                </tr>
                </template>
            </tbody>
            <tfoot>
                <tr>
                <td colspan="2" class="text-end text-success">結帳金額</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import loadingStore from '../../stores/loadingStore'
import orderStore from '../../stores/orderStore'
import { mapState, mapActions } from 'pinia'

const CartStore = cartStore()

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading']),
    ...mapState(orderStore, ['order'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    ...mapActions(orderStore, ['createOrder']),
    isPhone (value) {
      if (!value) {
        return '電話 為必填'
      } else {
        const phoneNumber = /^(09)[0-9]{8}$/
        return phoneNumber.test(value) ? true : '需要正確的電話號碼'
      }
    }
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
</style>
