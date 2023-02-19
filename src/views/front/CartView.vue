<template>
    這是購物車
    <div class="text-end">
        <button class="btn btn-outline-danger" type="button"
                @click="deleteCarts">清空購物車</button>
          </div>
        <table class="table align-middle">
        <thead>
            <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
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
                  {{ item.product.title }}
                  <!-- <div class="text-success">
                      已套用優惠券
                  </div> -->
                </td>
                <td>
                  <div class="input-group input-group-sm">
                      <select name="" id="" class="form-control" v-model="item.qty"
                      :disabled="item.id === loadingItem"
                      @change="updateCart(item)">
                      <option :value="i" v-for="i in 10" :key="`${i}111`">{{ i }}</option>
                      </select>
                  </div>
                </td>
                <td>
                  {{ item.product.price }}
                </td>
                <td class="text-end">
                  <small class="text-success">小計：</small>
                  {{ item.total }}
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
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      cart: {},
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data
        })
    },
    updateCart (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
        })
    },
    deleteCart (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
        })
    },
    deleteCarts () {
      this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
