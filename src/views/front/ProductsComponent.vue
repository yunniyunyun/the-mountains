<template>
    <hr>
    <div class="text-light mt-5">products, {{ products }}</div>
    <div class="text-light mt-5">productsList, {{ productsList }}</div>
    <!-- <div class="row row-cols-3 my-3 g-4">
    <div class="col" v-for="product in productsList" :key="product.id">
      <div class="card">
        <img
          :src="product.imageUrl"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-title">
            {{product.title}}
            <span class="float-end">$ {{product.price}}</span>
          </h6>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(product.id)">加入購物車</a>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import cartStore from '../../stores/cartStore'
import productsStore from '../../stores/productsStore'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(productsStore, ['productsList', 'products'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getProducts'])
  }
}
</script>
