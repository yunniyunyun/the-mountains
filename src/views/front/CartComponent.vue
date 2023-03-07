<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="header" style="background-image: url(./src/images/home/carts2.avif); background-position: 50% 23% ;background-size: cover; height: 30vh;"></div>
    <div class="container">
      <h2 class="mt-5 text-light text-center">購物車</h2>
      <div class="text-end">
          <!-- <button class="btn btn-outline-danger" type="button"
                  @click="deleteCarts">清空購物車</button> -->
            </div>
          <table class="table align-middle text-light">
          <thead>
              <tr>
              <th></th>
              <th>品名</th>
              <th>單價</th>
              <th style="width: 150px">數量/單位</th>
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
                    <img
                        :src="item.product.imageUrl"
                        class="table-image me-3"
                        :alt="item.product.title"
                        style="height: 100px; object-fit: contain; width: 150px;"
                      />
                    {{ item.product.title }}
                  </td>
                  <td>
                    {{ item.product.price }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                        <select name="" id="" class="form-select" v-model="item.qty"
                        :disabled="item.id === loadingItem"
                        @change="(e) => updateCart(item)">
                        <option :value="i" v-for="i in 10" :key="`${i}qty`">{{ i }}</option>
                        </select>
                    </div>
                  </td>
                  <td class="text-end">
                    <small class="text-success">小計：</small>
                    {{ item.final_total }}
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
    </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import { mapState, mapActions } from 'pinia'

const CartStore = cartStore()

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      loadingItem: ''
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'updateCart', 'getCarts'])
  },
  mounted () {
    CartStore.getCarts()
  }
}
</script>
