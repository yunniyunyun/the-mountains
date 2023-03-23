<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="my-5 row gx-5">
    <div class="col-md-3 col-lg-2 mb-2">
      <ul class="list-group sticky-md-top" style="top: 20vh; z-index: 0;">
        <li
          class="list-group-item text-light"
          style="cursor: pointer"
          v-for="category in categories"
          :key="category"
          @click.prevent="changeCategory(category)"
          :class="[{ active: category === tempCatrgory },{ 'bg-dark': category !== tempCatrgory }]"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="col-md-9 col-lg-10 mt-3 mt-md-0">
      <div class="row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-3 mb-3">
        <div class="col card-group" v-for="product in changeProducts" :key="product.id">
          <div class="card position-relative bg-dark text-light">
            <RouterLink :to="`/product/${product.id}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit;">
              <h4 class="text-center text-light" style="margin-top: 60px; z-index: 1;">查看更多</h4>
            </RouterLink>
            <img
              :src="product.imageUrl"
              class="card-img-top"
              alt="..."
              style="height: 150px;"
            />
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
      <pagination v-if="tempCatrgory==='全部行程'" :pages="pages" :get-products="getProducts" @change-page="getProducts"></pagination>
    </div>
  </div>
  </div>
</template>

<script>
import cartStore from '../../stores/cartStore'
import pagination from '../../components/FrontPaginationVue.vue'
import productsStore from '../../stores/productsStore'
import loadingStore from '../../stores/loadingStore'
import { mapState, mapActions } from 'pinia'

const ProductsStore = productsStore()

export default {
  components: {
    pagination
  },
  computed: {
    ...mapState(productsStore, ['pages', 'categories', 'tempCatrgory', 'changeProducts']),
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productsStore, ['getProducts', 'changeCategory'])
  },
  mounted () {
    ProductsStore.getProducts()
    ProductsStore.getCategories()
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
