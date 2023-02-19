<template>
  <loadingVue v-model:active="isLoading"/>
  <div v-if="isLogin">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/admin/products"
            class="p-2 me-2 text-decoration-none link-light">
              產品列表</router-link>
            <router-link to="/admin/orders"
            class="p-2 me-2 text-decoration-none link-light">
              訂單列表</router-link>
            <router-link to="/"
            class="p-2 me-2 text-decoration-none link-light">
              回前台首頁</router-link>
            <a href="#" @click.prevent="logout"
            class="p-2 me-2 text-decoration-none link-light">登出</a>
          </div>
        </div>
      </div>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      isLogin: false,
      isLoading: false
    }
  },
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `hexToken=; expires=${new Date()};`
      this.isLogin = false
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token

      this.$http.post(`${VITE_APP_URL}/api/user/check`)
        .then((res) => {
          // 打開後台畫面
          this.isLoading = false
          this.isLogin = true
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
        .catch(() => {
          this.isLoading = false
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.isLoading = true
    this.checkLogin()
  }
}
</script>
