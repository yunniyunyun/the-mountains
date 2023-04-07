<template>
  <loadingVue :active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 my-3 g-4">
      <div class="col card-group" v-for="article in articles" :key="article.id">
        <div class="card position-relative">
          <RouterLink :to="`/article/${article.id}`" class="more position-absolute" style="width: 100%; height: 100%; text-decoration: none; color: inherit;">
            <h4 class="text-center text-light" style="margin-top: 60px;">查看更多</h4>
          </RouterLink>
          <img
          :src="article.imageUrl"
          class="card-img-top"
          alt="card-image"
          style="height: 150px;"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-auto">
              {{article.title}}
            </h5>
            <div class="mt-1">
              <span class="badge bg-primary me-1"
                  v-for="(label, key) in article.tag"
                              :key="key+'tag'">
                              {{ label }}
              </span>
            </div>
            <p class="mt-2 mb-2" style="font-size: 14px;">
              {{article.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <pagination :pages="page" :get-products="getArticles" @change-page="getArticles"></pagination>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import pagination from '../../components/FrontPaginationVue.vue'
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
.more h4{
  display: none;
}
.more:hover h4{
  display: block;
}
.more:hover{
  border-radius: 5px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}
</style>
