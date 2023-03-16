<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <div class="row row-cols-5 my-3 g-4">
      <div class="col card-group" v-for="product in products" :key="product.id">
        <div class="card position-relative bg-dark text-light">
          <RouterLink :to="`/product/${product.id}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit;">
            <h4 class="text-center text-light" style="margin-top: 60px; z-index: 1;">查看更多</h4>
          </RouterLink>
          <!-- <RouterLink :to="`/product/${product.id}`"> -->
          <img
            :src="product.imageUrl"
            class="card-img-top"
            alt="..."
            style="height: 150px;"
          />
        <!-- </RouterLink> -->
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-auto">
              {{product.title}}
            </h6>
            <span class="float-end text-end">$ {{product.price}}</span>
            <a href="#" class="btn btn-outline-primary w-100 mt-2" @click.prevent="addToCart(product.id)" style="z-index: 5;">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
    <pagination :pages="pages" :get-products="getProducts" @change-page="getProducts"></pagination>
  </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import pagination from '../../components/PaginationVue.vue'
import productsStore from '../../stores/productsStore'
import loadingStore from '../../stores/loadingStore'
import { mapState, mapActions } from 'pinia'

const ProductsStore = productsStore()

export default {
  components: {
    pagination
  },
  computed: {
    ...mapState(productsStore, ['products', 'pages']),
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productsStore, ['getProducts'])
  },
  mounted () {
    ProductsStore.getProducts()
  }
}
</script>

<style scoped>
.header{
  background-image: url(@/images/home/products.avif);
  background-position: 50% 65% ;
  background-size: cover;
  height: 30vh;
}
</style>

<style scoped>
.card{
  border: 2px solid rgba(255, 255, 255, 0);
}
.card:hover{
  border: 2px solid #0A603C;
}
.more h4{
  display: none;
}
.more:hover h4{
  display: block;
}
.more:hover{
  border-radius: 5px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
</style>
