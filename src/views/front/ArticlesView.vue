<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <div class="row row-cols-5 my-3 g-4">
      <div class="col card-group" v-for="article in articles" :key="article.id">
        <div class="card">
          <RouterLink :to="`/article/${article.id}`">
          <img
            :src="article.imageUrl"
            class="card-img-top"
            alt="..."
            style="height: 150px;"
          /></RouterLink>
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-auto">
              {{article.title}}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <pagination :pages="page" :get-products="getArticles" @change-page="getArticles"></pagination>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import pagination from '../../components/PaginationVue.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      articles: [],
      page: {}
    }
  },
  components: {
    RouterLink,
    pagination
  },
  methods: {
    getArticles (page = 1) {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles/?page=${page}`)
        .then((res) => {
          this.isLoading = false
          this.articles = res.data.articles
          this.page = res.data.pagination
        })
        .catch((error) => {
          this.isLoading = false
          console.dir(error)
        })
    }
  },
  mounted () {
    this.isLoading = true
    this.getArticles()
  }
}
</script>

<style scoped>
.header{
  background-image: url(https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80);
  background-position: 50% 45% ;
  background-size: cover;
  height: 30vh;
}
</style>
