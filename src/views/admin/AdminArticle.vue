<template>
  <loadingVue v-model:active="isLoading"/>
{{ articles }}
    <div class="container">
      <div class="mt-4 d-flex justify-content-between align-items-end">
          <h2 class="mt-4">文章</h2>
          <div>
            <button class="btn btn-primary" @click="openModal('new', tempArticle)">
              新增文章
            </button>
          </div>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 100px">建立時間</th>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">標籤</th>
          <th>描述</th>
          <th style="width: 100px">文章狀態</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>{{ article.title }}</td>
          <td>
            <span>{{ article.tag }}</span>
          </td>
          <td>{{ article.description }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="getArticle(article.id)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelArticleModal(article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
<!-- delete coupon -->
<!-- <DeleteModal :temp-product="tempArticle" :delete-item="deleteArticle"></DeleteModal> -->

<pagination :pages="page" :get-products="getArticles" @change-page="getArticles"></pagination>

</template>

<script>
// import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationVue.vue'
// import DeleteModal from '../../components/DeleteModal.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      page: {},
      articles: {},
      tempArticle: {},
      articleModal: '',
      delArticleModal: ''
    }
  },
  methods: {
    checkLogin () {
      const url = `${VITE_APP_URL}/api/user/check`
      this.$http.post(url)
        .then(() => {
          this.getArticles()
        })
        .catch((error) => {
          alert(error.response.data.message)
          window.location = 'login.html'
        })
    },
    getArticles (page = 1) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/articles/?page=${page}`
      this.$http.get(url)
        .then((response) => {
          this.isLoading = false
          this.articles = response.data.articles
          this.page = response.data.pagination
        })
        .catch((error) => {
          this.isLoading = false
          alert(error.response.data.message)
        })
    }
  },
  components: {
    pagination
    // DeleteModal
  },
  mounted () {
    this.isLoading = true

    // this.articleModal = new Modal(document.getElementById('articleModal'), {
    //   keyboard: false
    // })

    // this.delArticleModal = new Modal(document.getElementById('delProductModal'), {
    //   keyboard: false
    // })

    // Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}

</script>
