<template>
  <loadingVue v-model:active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5"></div>
    <div class="row row-cols-5 my-3 g-4">
      <h1>{{ article.title }}</h1>
      <img :src="article.imageUrl" width="200" class="img-fluid" alt="">
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
