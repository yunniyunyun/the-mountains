<template>
  <header>
    <div class="container fixed-top">
        <!-- FIXME: 移動出現底色 -->
        <nav class="navbar navbar-expand-lg navbar-dark p-4 ">
            <div class="container-fluid">
                <RouterLink to="/"><img src="../images/logo/山岳。山悅.png" alt="logo" style="height: 44px;"></RouterLink>
                <!-- .navbar-toggler 漢堡式選單按鈕 -->
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav fs-5">
                            <RouterLink to="/products"
                            class="nav-link link-white me-4" href="#">最新活動</RouterLink>
                            <RouterLink to="/products"
                            class="nav-link link-white me-4" href="#">熱門活動</RouterLink>
                            <RouterLink to="/products"
                            class="nav-link link-white me-4" href="#">推薦行程</RouterLink>
                            <RouterLink to="/products"
                            class="nav-link link-white me-4">全部行程</RouterLink>
                            <a class="nav-link link-white" href="#">文章分享</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  </header>
    <!-- <RouterLink to="/cart">購物車</RouterLink> | -->
  <RouterView></RouterView>
  <!-- 表尾 -->
  <footer class="bg-gray2">
      <div class="container text-center text-secondary pt-4 pb-3 pt-sm-5 pb-sm-4">
          <a href="#"><img src="../images/logo/山岳。山悅.png" alt="logo"></a>
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

export default {
  components: {
    RouterView
  }
}
</script>
