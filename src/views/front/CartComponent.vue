<template>
    <loadingVue v-model:active="isLoading"/>
    這是購物車
    <div class="mt-5 text-light">cartList: {{ cartList }}</div>
    <div>{{ cart }}</div>
    <div class="text-end">
        <button class="btn btn-outline-danger" type="button"
                @click="deleteCarts">清空購物車</button>
          </div>
        <!-- <table class="table align-middle">
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
    </table> -->
</template>

<script>
import cartStore from '../../stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      cart: {},
      loadingItem: ''
    }
  },
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  }
}
</script>
