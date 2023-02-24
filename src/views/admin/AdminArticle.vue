<template>
  <loadingVue v-model:active="isLoading"/>
    <div class="container">
      <div class="mt-4 d-flex justify-content-between align-items-end">
          <h2 class="mt-4">文章</h2>
          <div>
            <button class="btn btn-primary" @click="openModal('new', {})">
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
            <span class="badge bg-info me-1"
            v-for="(label, key) in article.tag"
                        :key="key+'tag'">
                        {{ label }}
            </span>
          </td>
          <td>{{ article.description }}</td>
          <td>
            <span class="text-success" v-if="article.isPublic">已發佈</span>
            <span v-else>未發佈</span>
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
                @click="openModal('delete', article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
<!-- create/ update article -->
<div id="articleModal" ref="articleModal" class="modal fade" tabindex="-1" aria-labelledby="articleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="articleModalLabel" class="modal-title">
                  <span v-if="isNew">新增文章</span>
                  <span v-else>編輯文章</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <label for="title">標題</label>
                    <input type="text" class="form-control" id="title" v-model="tempArticle.title"
                          placeholder="請輸入標題">
                  </div>
                  <div class="mb-3">
                    <label for="image" class="form-label">輸入圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      id="image"
                      v-model="tempArticle.imageUrl"
                      placeholder="請輸入圖片連結"
                    />
                    <img class="img-fluid" :src="tempArticle.imageUrl" alt="">
                  </div>
                  <div class="mb-3">
                    <label for="author">作者</label>
                    <input type="text" class="form-control" id="author" v-model="tempArticle.author"
                          placeholder="請輸入作者">
                  </div>
                  <div class="mb-3">
                    <label for="create_at">建立日期</label>
                    <input type="date" class="form-control" id="create_at"
                          v-model="create_at">
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox"
                            v-model="tempArticle.isPublic" id="isPublic">
                      <label class="form-check-label" for="isPublic">
                        是否發佈
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="tag" class="form-label">標籤</label>
                    <div class="row gx-1 mb-3" v-if="tempArticle.tag">
                      <div
                        class="col-md-2 mb-1"
                        v-for="(label, key) in tempArticle.tag"
                        :key="key"
                      >
                        <div class="input-group input-group-sm">
                          <input
                            type="text"
                            class="form-control form-control"
                            id="tag"
                            v-model="tempArticle.tag[key]"
                            placeholder="請輸入標籤"
                          />
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            @click="tempArticle.tag.splice(key, 1)"
                          >
                            <!-- <i class="bi bi-x-square-fill"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        class="col-md-2 mb-1"
                        v-if="
                          tempArticle.tag[tempArticle.tag.length - 1] ||
                          !tempArticle.tag.length
                        "
                      >
                        <button
                          class="btn btn-outline-primary btn-sm d-block w-100"
                          type="button"
                          @click="tempArticle.tag.push('')"
                        >
                          新增標籤
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="description" class="form-label">文章描述</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="description"
                      v-model="tempArticle.description"
                      placeholder="請輸入文章描述"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <ckeditor
                      :editor="editor"
                      :config="editorConfig"
                      v-model="tempArticle.content"
                    ></ckeditor>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button v-if="isNew" type="button" class="btn btn-primary" @click="updateArticle">
                  新增文章
                </button>
                <button v-else type="button" class="btn btn-primary" @click="updateArticle">
                  更新文章
                </button>
            </div>
            </div>
        </div>
    </div>
<!-- delete article -->
<DeleteModal :item="tempArticle" :delete-item="deleteArticle"></DeleteModal>

<pagination :pages="page" :get-products="getArticles" @change-page="getArticles"></pagination>

</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationVue.vue'
import DeleteModal from '../../components/DeleteModal.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isNew: true,
      isLoading: false,
      page: {},
      articles: {},
      tempArticle: {
        tag: [],
        isPublic: false
      },
      create_at: new Date().getTime() / 1000,
      articleModal: '',
      delArticleModal: '',
      // editor
      editor: ClassicEditor,
      editorData: '<p>Hello world!!</p>',
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link'],
        dataProcessor: {
          writer: {
            enter: '<br>'
          }
        }
      }
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
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
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
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    getArticle (id) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${id}`
      this.$http.get(url)
        .then((response) => {
          this.isLoading = false
          this.openModal('edit', response.data.article)
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    updateArticle () {
      this.isLoading = true
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`
      if (this.isNew) {
        this.$http.post(url, { data: this.tempArticle })
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.articleModal.hide()
            this.getArticles()
            this.isLoading = false
          })
          .catch((error) => {
            this.isLoading = false
            Swal.fire({
              icon: 'error',
              title: error.response.data.message
            })
          })
      } else {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        this.$http.put(url, { data: this.tempArticle })
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.articleModal.hide()
            this.getArticles()
            this.isLoading = false
          })
          .catch((error) => {
            this.isLoading = false
            Swal.fire({
              icon: 'error',
              title: error.response.data.message
            })
          })
      }
    },
    deleteArticle () {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
      this.$http.delete(url)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.delArticleModal.hide()
          this.getArticles()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    openModal (state, item) {
      this.tempArticle = { ...item }
      if (state === 'new') {
        this.tempArticle = {
          create_at: new Date().getTime() / 1000,
          tag: [],
          isPublic: false
        }
        this.isNew = true
        this.articleModal.show()
      } else if (state === 'edit') {
        this.isNew = false
        this.articleModal.show()
      } else if (state === 'delete') {
        this.delArticleModal.show()
      }
    }
  },
  components: {
    pagination,
    DeleteModal
  },
  watch: {
    tempArticle () {
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempArticle.create_at * 1000)
        .toISOString().split('T');
      [this.create_at] = dateAndTime
      if (!this.tempArticle.tag) {
        this.tempArticle.tag = []
      }
    },
    create_at () {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  mounted () {
    this.isLoading = true

    this.articleModal = new Modal(document.getElementById('articleModal'), {
      keyboard: false
    })

    this.delArticleModal = new Modal(document.getElementById('delModal'), {
      keyboard: false
    })

    // Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}

</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
