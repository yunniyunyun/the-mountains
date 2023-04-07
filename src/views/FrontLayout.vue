<template>
  <header>
    <div class="container fixed-top" style="z-index: 10;">
        <nav class="navbar navbar-expand-lg navbar-dark p-3">
            <div class="container-fluid">
                <RouterLink to="/"><img src="../images/logo/logo.png" class="nav-logo" alt="logo"></RouterLink>
                <!-- .navbar-toggler 漢堡式選單按鈕 -->
                <div>
                    <RouterLink to="/cart" class="d-lg-none p-3 me-2">
                        <span class="position-relative">
                            <img alt="icon-carts" src="./../images/icon/icon-carts.svg" style="width: 24px;">
                            <span v-if="cart.carts?.length!=0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{{cart.carts?.length}}</span>
                        </span>
                    </RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="../images/icon/icon-navbar-toggler.svg" alt="navbar-toggler" ></button>

                    <div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style="background: #1C1E1D;">
                      <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel"><RouterLink to="/" @click="removeShow"><img src="../images/logo/山岳。山悅.png" class="nav-logo" alt="logo"></RouterLink></h5>
                        <div>
                          <RouterLink to="/cart" class="d-lg-none p-2"  @click="removeShow">
                            <span class="position-relative">
                                <img alt="icon-carts" src="./../images/icon/icon-carts.svg" style="width: 24px;">
                                <span v-if="cart.carts?.length!=0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{{cart.carts?.length}}</span>
                            </span>
                          </RouterLink>
                          <button type="button" class="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img src="../images/icon/icon-close.svg" class="nav-logo" alt="icon-close" style="max-width: 24px;"></button>
                        </div>
                      </div>
                      <div class="offcanvas-body p-4">
                        <div class="navbar-nav fs-5">
                            <RouterLink to="/random"
                            class="nav-link link-white" @click="removeShow">找樂趣</RouterLink>
                            <RouterLink to="/hots"
                            class="nav-link link-white" @click="removeShow">熱門活動</RouterLink>
                            <RouterLink to="/products"
                            class="nav-link link-white" @click="removeShow">全部行程</RouterLink>
                            <RouterLink to="/articles"
                            class="nav-link link-white" @click="removeShow">文章分享</RouterLink>
                            <RouterLink to="/favorite"
                            class="nav-link link-white" @click="removeShow">我的收藏</RouterLink>
                            <RouterLink to="/orders"
                            class="nav-link link-white" @click="removeShow">訂單查詢</RouterLink>
                        </div>
                      </div>
                    </div>
                    <div class="collapse navbar-collapse">
                        <div class="navbar-nav fs-5">
                            <RouterLink to="/random"
                            class="nav-link link-white me-4">找樂趣</RouterLink>
                            <RouterLink to="/hots"
                            class="nav-link link-white me-4">熱門活動</RouterLink>
                            <RouterLink to="/products"
                            class="nav-link link-white me-4">全部行程</RouterLink>
                            <RouterLink to="/articles"
                            class="nav-link link-white">文章分享</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="d-none d-lg-inline">
                    <a href="#" class="p-2 me-2 d-inline-block">
                      <img alt="icon-search" src="./../images/icon/icon-search.svg">
                    </a>
                    <RouterLink to="/favorite" class="p-2 me-2 d-xl-inline-block d-none">
                            <img alt="icon-hearts" src="./../images/icon/icon-hearts.svg">
                    </RouterLink>
                    <RouterLink to="/orders" class="p-2 me-2 d-inline-block">
                            <img alt="icon-orders" src="./../images/icon/icon-orders.svg">
                    </RouterLink>
                    <RouterLink to="/cart" class="p-2 d-inline-block">
                        <span class="position-relative">
                            <img alt="icon-carts" src="./../images/icon/icon-carts.svg">
                            <span v-if="cart.carts?.length!=0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{{cart.carts?.length}}</span>
                        </span>
                    </RouterLink>
                </div>
            </div>
        </nav>
    </div>
  </header>
    <!-- <RouterLink to="/cart">購物車</RouterLink> | -->
  <RouterView />
  <!-- 回到頂端 -->
  <a href="#" class="top p-2 d-flex flex-column align-items-center" @click.prevent="scrollToTop">
    <img alt="top" class="d-block" src="./../images/icon/top.svg">
    <span style="color: #1FBA82; ">TOP</span>
  </a>
  <!-- 表尾 -->
  <footer class="bg-gray2 footer">
      <div class="container text-center text-secondary pt-4 pb-3 pt-sm-5 pb-sm-4">
          <a href="#"><img class="footer-logo" src="../images/logo/logo.png" alt="logo"></a>
          <div class="mt-4">
              <a href="#" class="me-2 link-secondary text-decoration-none">關於山悅</a> |
              <a href="#" class="ms-2 link-secondary text-decoration-none">客服信箱</a>
          </div>
          <div class="mt-3">
              <a href="#" class="me-2 link-secondary text-decoration-none">
                  <iconify-icon icon="lucide:instagram" width="26.6px" height="26.6px"></iconify-icon>
              </a>
              <a href="#" class="ms-2 link-secondary text-decoration-none">
                  <iconify-icon icon="bi:facebook" width="26px" height="26px"></iconify-icon>
              </a>
          </div>
          <hr style="border: 1px solid #4F5154;">
          <p>Copyright © 2023 六角學院 Vue直播班 本網站僅供學習使用，無商業用途</p>
      </div>
  </footer>
</template>

<script>
import { RouterView } from 'vue-router'
import { mapState } from 'pinia'
import cartStore from '../stores/cartStore.js'

const CartStore = cartStore()

export default {
  components: {
    RouterView
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    removeShow () {
      let classVal = document.getElementById('offcanvasRight').getAttribute('class')
      classVal = classVal.replace('show', '')
      document.getElementById('offcanvasRight').setAttribute('class', classVal)
      // offcanvas-backdrop
      let classVal2 = document.getElementsByClassName('offcanvas-backdrop')[0].getAttribute('class')
      classVal2 = classVal2.replace('show', '')
      document.getElementsByClassName('offcanvas-backdrop')[0].setAttribute('class', classVal2)
    }
  },
  mounted () {
    CartStore.getCarts()
  }
}
</script>

<style scoped>
.navbar-nav .active{
  /* text-decoration: underline !important; */
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);

}
.nav-logo{
  height: 44px;
}
@media(max-width: 768px) {
  .nav-logo{
    height: 25px;
  }
}
.footer-logo{
  height: 44px;
  max-width: 193px;
  object-fit: cover;
}
@media(max-width: 768px) {
  .footer-logo{
    height: 37px;
    max-width: 162px;
  }
}
@media(max-width: 275px) {
  .footer-logo{
    height: auto;
    width: 100%;
  }
}
.top{
  text-decoration: none;
  border: 1px solid #1FBA82;
  position: fixed;
  z-index: 6;
  bottom: 50px;
  right: 50px;
}
.top > img{
  width: 16px;
}
@media(max-width: 768px) {
  .top{
    right: 24px;
    bottom: 144px;
    font-size: 12px
  }
  .top > img{
    width: 12px;
  }
}
</style>
