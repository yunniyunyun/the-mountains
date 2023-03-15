<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5 mb-3 d-flex flex-column justify-content-center align-items-center text-light" style="border: 2px solid #373737; box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.16); background: #373737;">
      <img :src="article.imageUrl" class="img-fluid" alt="" style="width: 100%; height: 500px; object-fit: cover;">
      <div class="mt-3">
        <span class="badge bg-primary me-1" style="font-size: 14px;"
            v-for="(label, key) in article.tag"
                        :key="key+'tag'">
                        {{ label }}
        </span>
      </div>
      <h1 class="mt-3 mb-4">{{ article.title }}</h1>
      <span class="mb-3">{{ article.description }}</span>
      <p style="color: #438f73;">{{ $filters.date(article.create_at) }}</p>
      <p v-html="article.content" class="p-5 container" style="word-break: break-all;"></p>
    </div>
    <div class="d-flex justify-content-center mb-5">
          <RouterLink to="/articles" class="btn btn-outline-secondary" href="#">回文章分享</RouterLink>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      article: []
    }
  },
  methods: {
    getArticle () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          this.article = res.data.article
        })
    }
  },
  mounted () {
    this.isLoading = true
    this.getArticle()
    this.isLoading = false
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
