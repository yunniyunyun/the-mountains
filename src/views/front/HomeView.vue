<template>
  <div class="header">
    <div class="container text-center">
      <div><img src="../../images/logo/logo2@3x.png" alt="logo" style="margin-top:20vh; height: 164px;"></div>
      <h2 class="text-white mt-5">來一場不一樣的山旅吧</h2>
      <!-- <div>搜尋</div> -->
    </div>
  </div>
    <!-- 中間輪播 -->
    <!-- Swiper -->
    <div>
        <swiper :modules="modules" class="swiper"
        :pagination="{ dynamicBullets: true, clickable: true }" style="position: relative; height: 480px;">
          <swiper-slide class="swiper-slide swiper-slide-1">
              <div class="d-flex flex-column justify-content-center align-items-center text-white" style="height: 100%; border: 1px solid #FFFFFF;">
                  <h3>自然之美</h3>
                  <h3>。</h3>
                  <h3>森呼吸</h3>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide-2" style="background-position: 50% 50%;">
              <div class="d-flex flex-column justify-content-center align-items-center text-white" style="height: 100%; border: 1px solid #FFFFFF;">
                  <h3>寧靜 美好</h3>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide-3" style="background-position: 50% 30%;">
              <div class="d-flex flex-column justify-content-center align-items-center text-white" style="height: 100%; border: 1px solid #FFFFFF;">
                  <h3>自我對話</h3>
              </div>
          </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  data () {
    return {
      modules: [Navigation, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.swiper {
  --swiper-theme-color: #1FBA82 !important;
}
.header{
  background-image: url(@/images/home/banner1@3x.png);
  background-size: cover;
  height: 100vh;
}
.swiper-slide{
  padding: 80px;
  background-size: cover;
}
.swiper-slide-1{
  background-image: url(@/images/home/森呼吸@3x.png)
}
.swiper-slide-2{
  background-image: url(@/images/home/寧靜美好.jpg)
}
.swiper-slide-3{
  background-image: url(@/images/home/與自我對話.jpg)
}
</style>
