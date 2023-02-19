<template>
    <div class="container">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1>
          <div class="col-8">
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" v-model="user.username" id="username"
                  placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" v-model="user.password" id="password"
                  placeholder="Password" required>
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" v-on:click="login" type="button">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          this.$http.defaults.headers.common.Authorization = token
          alert('登入成功')
          this.$router.push('/admin/products')
        })
        .catch((error) => {
          alert(error.response.data.error.message)
        })
    }
  }
}
</script>
