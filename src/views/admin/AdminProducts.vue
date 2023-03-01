<template>
    <loadingVue v-model:active="isLoading"/>
    <div class="container">
        <div class="mt-4 d-flex justify-content-between align-items-end">
            <h2 class="mt-4">產品列表</h2>
            <div>
          <button class="btn btn-primary" @click="openModal('new', {})">
            建立新的產品
          </button></div>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="100">
                分類
              </th>
              <th width="100">
                等級
              </th>
              <th>產品名稱</th>
              <th width="100">
                原價
              </th>
              <th width="100">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td><div class="badge bg-primary">{{product.category}}</div></td>
              <td>{{product.level}}</td>
              <td>{{product.title}}</td>
              <td class="text-end">{{product.origin_price}}</td>
              <td class="text-end">{{product.price}}</td>
              <td>
                <span class="text-success" v-if="product.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', product)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', product)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <!-- pagination -->
    <pagination :pages="page" :get-products="getData" @change-page="getData"></pagination>
    <!-- Modal -->
    <!-- create / update product -->
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                <div class="col-sm-4">
                    <div class="mb-3">
                      <label for="create_at" class="form-label">建立日期</label>
                      <input type="date" class="form-control" id="create_at"
                          v-model="create_at">
                    </div>
                    <div class="mb-3">
                    <div class="mb-3">
                        <label for="imageUrl" class="form-label">主要圖片</label>
                        <input type="text" v-model="tempProduct.imageUrl" class="form-control"
                                placeholder="請輸入圖片連結">
                    </div>
                    <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
                    </div>
                    <h3 class="mb-3">多圖新增</h3>
                    <div v-if="tempProduct.imagesUrl">
                    <div class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                        <div class="mb-3">
                        <label for="imageUrl" class="form-label">圖片網址</label>
                        <input v-model="tempProduct.imagesUrl[key]" type="text" class="form-control"
                            placeholder="請輸入圖片連結">
                        </div>
                        <img class="img-fluid" :src="image">
                    </div>
                    <!-- 沒有值: 刪除；有值: 新增 -->
                    <div v-if="!tempProduct.imagesUrl.length ||tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                        <button class="btn btn-outline-primary btn-sm d-block w-100" @click="tempProduct.imagesUrl.push('')">
                        新增圖片
                        </button>
                    </div>
                    <div v-else>
                        <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempProduct.imagesUrl.pop('')">
                        刪除圖片
                        </button>
                    </div>
                    </div>
                    <!-- 沒有多圖的時候會沒有 key(imagesUrl)-->
                    <div v-else>
                        <button class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">
                        新增圖片
                        </button>
                    </div>

                </div>
                <div class="col-sm-8">
                    <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題">
                    </div>
                    <!-- 標籤 -->
                    <div class="mb-3">
                      <label for="tag" class="form-label">標籤</label>
                      <div class="row gx-1 mb-3" v-if="tempProduct.tag">
                        <div
                          class="col-md-2 mb-1"
                          v-for="(label, key) in tempProduct.tag"
                          :key="key"
                        >
                          <div class="input-group input-group-sm">
                            <input
                              type="text"
                              class="form-control form-control"
                              id="tag"
                              v-model="tempProduct.tag[key]"
                              placeholder="請輸入標籤"
                            />
                            <button
                              type="button"
                              class="btn btn-outline-danger"
                              @click="tempProduct.tag.splice(key, 1)"
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
                            tempProduct.tag[tempProduct.tag.length - 1] ||
                            !tempProduct.tag.length
                          "
                        >
                          <button
                            class="btn btn-outline-primary btn-sm d-block w-100"
                            type="button"
                            @click="tempProduct.tag.push('')"
                          >
                            新增標籤
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- 標籤結束 -->

                    <div class="row">
                    <div class="mb-3 col-md-4">
                        <label for="category" class="form-label">分類</label>
                        <input id="category" v-model="tempProduct.category" type="text" class="form-control"
                                placeholder="請輸入分類">
                    </div>
                    <div class="mb-3 col-md-4">
                        <label for="level" class="form-label">等級</label>
                        <input id="level" v-model="tempProduct.level" type="text" class="form-control"
                                placeholder="請輸入等級">
                    </div>
                    <div class="mb-3 col-md-4">
                        <label for="price" class="form-label">單位</label>
                        <input id="unit" v-model="tempProduct.unit" type="text" class="form-control" placeholder="請輸入單位">
                    </div>
                    </div>

                    <div class="row">
                    <div class="mb-3 col-md-4">
                        <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price" v-model="tempProduct.origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                    </div>
                    <div class="mb-3 col-md-4">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" v-model="tempProduct.price" type="number" min="0" class="form-control"
                                placeholder="請輸入售價">
                    </div>
                    <div class="mb-3 col-md-4">
                      <label class="form-label"></label>
                      <div class="form-check">
                          <input id="is_enabled"
                          v-model="tempProduct.is_enabled" class="form-check-input" type="checkbox"
                                  :true-value="1" :false-value="0">
                          <label class="form-check-label"
                          for="is_enabled">是否啟用</label>
                      </div>
                      <div class="form-check">
                          <input id="is_hot"
                          v-model="tempProduct.is_hot" class="form-check-input" type="checkbox"
                                  :true-value="1" :false-value="0">
                          <label class="form-check-label"
                          for="is_hot">熱門活動</label>
                      </div>
                    </div>
                    </div>
                    <hr>

                    <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" v-model="tempProduct.description"  type="text" class="form-control"
                                placeholder="請輸入產品描述" rows="5">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <ckeditor
                      :editor="editor"
                      :config="editorConfig"
                      v-model="tempProduct.content"
                    ></ckeditor>
                    </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-primary" @click="updateItem">
                確認
                </button>
            </div>
            </div>
        </div>
    </div>
    <!-- delete product -->
    <DeleteProductModal :item="tempProduct" :delete-item="deleteItem"></DeleteProductModal>
    <!-- Modal -->
</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'
import pagination from '../../components/PaginationVue.vue'
import DeleteProductModal from '../../components/DeleteModal.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      isNew: false,
      products: [],
      tempProduct: {
        create_at: new Date().getTime() / 1000,
        unit: '人',
        tag: []
      },
      productModal: '',
      delProductModal: '',
      page: {},
      // editor
      editor: ClassicEditor,
      editorData: '<p>Hello world!!</p>',
      editorConfig: {
        dataProcessor: {
          writer: {
            enter: '<br>'
          }
        }
      },
      // custom
      create_at: new Date().getTime() / 1000
    }
  },
  methods: {
    checkLogin () {
      const url = `${VITE_APP_URL}/api/user/check`
      this.$http.post(url)
        .then(() => {
          this.getData()
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
          window.location = 'login.html'
        })
    },
    getData (page = 1) {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(url)
        .then((response) => {
          this.products = response.data.products
          this.page = response.data.pagination
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
    updateItem () {
      this.isLoading = true
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`
      if (this.isNew) {
        this.$http.post(url, { data: this.tempProduct })
          .then((response) => {
            this.productModal.hide()
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.getData()
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
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        this.$http.put(url, { data: this.tempProduct })
          .then((response) => {
            this.productModal.hide()
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.getData()
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
    deleteItem () {
      this.isLoading = true
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url)
        .then((response) => {
          this.delProductModal.hide()
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.getData()
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
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    },
    openModal (state, item) {
      this.tempProduct = { ...item }
      if (state === 'new') {
        this.tempProduct = {
          create_at: new Date().getTime() / 1000,
          unit: '人',
          tag: []
        }
        this.isNew = true
        this.productModal.show()
      } else if (state === 'edit') {
        this.isNew = false
        this.productModal.show()
      } else if (state === 'delete') {
        this.isNew = false
        this.delProductModal.show()
      }
    }
  },
  watch: {
    tempProduct () {
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempProduct.create_at * 1000)
        .toISOString().split('T');
      [this.create_at] = dateAndTime
      if (!this.tempProduct.tag) {
        this.tempProduct.tag = []
      }
    },
    create_at () {
      this.tempProduct.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  components: {
    pagination,
    DeleteProductModal
  },
  mounted () {
    this.isLoading = true
    this.productModal = new Modal(document.getElementById('productModal'), {
      keyboard: false
    })

    this.delProductModal = new Modal(document.getElementById('delModal'), {
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
