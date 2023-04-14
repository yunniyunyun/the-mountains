<template>
  <loadingVue :active="isLoading"/>
  <div class="header"></div>
  <div class="container">
    <div class="mt-5 mb-3 d-flex flex-column justify-content-center align-items-center text-light article-card">
      <img :src="article.imageUrl" class="img-fluid w-100" :alt="article.title">
      <div class="mt-3">
        <span class="badge bg-primary me-1 fz-14"
            v-for="(label, key) in article.tag"
                        :key="key+'tag'">
                        {{ label }}
        </span>
      </div>
      <h1 class="mt-3 mb-4">{{ article.title }}</h1>
      <span class="mb-3">{{ article.description }}</span>
      <p class="color-green">{{ $filters.date(article.create_at) }}</p>
      <p v-html="article.content" class="p-5 container content"></p>
    </div>
    <div class="d-none d-lg-block">
    <div class="d-flex justify-content-between mb-3">
      <template v-if="preArticle.id">
        <a href="#" class="d-flex justify-content-center align-items-center changePage link-none" @click.prevent="changePage(preArticle.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#BAB8B8" class="bi bi-arrow-left-circle me-2 icon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#BAB8B8" class="bi bi-arrow-left-circle-fill me-2 icon-hover" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
          <div class="d-flex bg-dark text-light article-content border-radius-10">
            <img
              :src="preArticle.imageUrl"
              :alt="preArticle.title"
              style="border-radius: 10px 0px 0px 10px;"
              />
            <div class="d-flex flex-column p-3 justify-content-center" style="width: 240px;">
              <h5 class="mb-2">
                {{preArticle.title}}
              </h5>
              <div class="mt-1">
                <span class="badge bg-primary me-1"
                    v-for="(label, key) in preArticle.tag"
                                :key="key+'tag'">
                                {{ label }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </template>
      <template v-else>
        <div></div>
      </template>
      <template v-if="nextArticle.id" >
        <a href="#" class="d-flex justify-content-center align-items-center changePage link-none" @click.prevent="changePage(nextArticle.id)">
          <div class="d-flex bg-dark text-light article-content border-radius-10">
            <div class="d-flex flex-column p-3 justify-content-center" style="width: 240px">
              <h5 class="mb-2">
                {{nextArticle.title}}
              </h5>
              <div class="mt-1">
                <span class="badge bg-primary me-1"
                    v-for="(label, key) in nextArticle.tag"
                                :key="key+'tag'">
                                {{ label }}
                </span>
              </div>
            </div>
            <img
              :src="nextArticle.imageUrl"
              :alt="nextArticle.title"
              style="border-radius: 0px 10px 10px 0px;"
              />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#BAB8B8" class="bi bi-arrow-left-circle ms-2 icon transform-x" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#BAB8B8" class="bi bi-arrow-left-circle-fill ms-2 icon-hover transform-x" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </a>
      </template>
      <template v-else>
        <div></div>
      </template>
    </div>
    </div>
    <div class="d-flex justify-content-between mb-3 d-lg-none">
      <template v-if="preArticle.id">
        <a href="#" class="btn btn-outline-secondary" @click.prevent="changePage(preArticle.id)">前一篇</a>
      </template>
      <template v-else>
        <div></div>
      </template>
      <template v-if="nextArticle.id">
        <a href="#" class="btn btn-outline-secondary" @click.prevent="changePage(nextArticle.id)">後一篇</a>
      </template>
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
      article: {},
      preArticle: {},
      nextArticle: {}
    }
  },
  methods: {
    getArticle () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          this.article = res.data.article
          this.getArticles()
          this.isLoading = false
        })
    },
    getArticles () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          const articlesList = res.data.articles
          const index = articlesList.findIndex((item) => item.id === this.article.id)
          if (articlesList[index - 1]) {
            this.preArticle = articlesList[index - 1]
          } else {
            this.preArticle = {}
          }
          if (articlesList[index + 1]) {
            this.nextArticle = articlesList[index + 1]
          } else {
            this.nextArticle = {}
          }
        })
        .catch((error) => {
          console.dir(error)
        })
    },
    changePage (id) {
      this.$router.push(`/article/${id}`)
    }
  },
  watch: {
    $route: 'getArticle'
  },
  mounted () {
    this.isLoading = true
    this.getArticle()
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
.content {
  word-break: break-all;
  overflow:hidden;
}
.content :deep(img) {
  display: block;
  max-width: 100%;
}
.changePage .article-content{
  border: 2px solid rgba(255, 255, 255, 0);
}
.changePage:hover .article-content{
  border: 2px solid #bab8ba;
}
.changePage .icon-hover, .changePage:hover .icon{
  display: none;
}
.changePage:hover .icon-hover{
  display: block;
}
.article-content img{
  height: 150px;
  width: 200px;
}
@media(max-width: 1200px) {
  .article-content img{
    height: 120px;
    width: 160px;
  }
}
.article-card{
  border: 2px solid #373737;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.16);
  background: #373737;
}
.article-card img {
  height: 500px;
  object-fit: cover;
}
</style>
