<template>
  <div class="header">
    <div class="container text-center">
      <div><img src="../../images/logo/logo2@3x.png" alt="logo" style="margin-top:20vh; height: 164px;"></div>
      <h2 class="text-white mt-5">來一場不一樣的山旅吧</h2>
      <!-- <div>搜尋</div> -->
    </div>
  </div>
  <div class="hotlist text-light">
    <div class="container content"  style="padding-top: 80px;">
      <div class="d-flex justify-content-between align-items-center position-relative"
      style="margin-bottom: 40px;">
        <img src="../../images/icon/hot.svg" class="position-absolute top-0 start-0 translate-middle"
        style="width: 60px; height: 80px; z-index: 0;">
        <h2 class="d-inline-block" style=" z-index: 1;">熱門活動</h2>
        <div style="width: 88%; border: 1px solid rgba(255, 255, 255, 0.8); height: 1px;"></div>
      </div>
      <div class="row row-cols-2 row-cols-md-4">
        <div v-for="product in hotHomeProducts" :key="product.id">
          <RouterLink :to="`/product/${product.id}`" style="text-decoration: none; color: inherit;">
            <div class="col d-flex align-items-start flex-column p-0 position-relative"
                style="height: 320px; background-size: cover;"  v-bind:style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">
            <div class="hot position-absolute d-flex justify-content-center align-items-center text-light"
                style="width: 100%; height: 320px;">
              <h5 class="more px-4 py-3" style="border: 2px solid #0A603C;">了解更多</h5>
            </div>
            <div class="d-flex justify-content-between" style="width: 100%; margin-top: 20px;">
              <h5 class="d-block"
                style="padding: 8px 16px; background: rgba(10, 96, 60, 0.8); z-index:3">
              即將額滿</h5>
              <a href="#" class="d-block favorite"
              style="height: 36.33px; width: 33.33px; margin-right: 22px; z-index:4;">
              </a>
            </div>
            <h4 class="mt-auto mb-0" style="padding: 20px 20px">{{ product.title }}</h4>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
    <!-- 中間輪播 -->
    <!-- Swiper -->
    <div>
        <swiper :modules="modules" class="swiper"  :autoplay="{ delay: 50000, disableOnInteraction: false }"
        :pagination="{ dynamicBullets: true, clickable: true }" style="position: relative; height: 480px;">
          <swiper-slide class="swiper-slide swiper-slide-1">
              <div class="d-flex flex-column justify-content-center align-items-center text-white" style="height: 100%; border: 1px solid #FFFFFF;">
                  <h2>自然之美</h2>
                  <h2>。</h2>
                  <h2>森呼吸</h2>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide-2" style="background-position: 50% 50%;">
              <div class="d-flex flex-column justify-content-center align-items-center text-white" style="height: 100%; border: 1px solid #FFFFFF;">
                  <h2>寧靜 美好</h2>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide-3" style="background-position: 50% 30%;">
              <div class="d-flex flex-column justify-content-center align-items-center text-white" style="height: 100%; border: 1px solid #FFFFFF;">
                  <h2>自我對話</h2>
              </div>
          </swiper-slide>
        </swiper>
    </div>
    <div class="container content text-light"  style="padding-top: 80px; padding-bottom: 80px;">
      <div class="d-flex justify-content-between align-items-center position-relative"
      style="margin-bottom: 40px;">
        <img src="../../images/icon/new.svg" class="position-absolute top-0 start-0 translate-middle"
        style="width: 60px; height: 80px; z-index: 0;">
        <h2 class="d-inline-block" style=" z-index: 1;">最新活動</h2>
        <div style="width: 88%; border: 1px solid rgba(255, 255, 255, 0.8); height: 1px;"></div>
      </div>
      <swiper
        :slidesPerView="4"
        :spaceBetween="40"
        :modules="modules"
        class="Swiper2"
      >
        <swiper-slide v-for="product in latestProducts" :key="product.id" style="padding: 0px;">
            <img
            :src="product.imageUrl"
            class="card-img-top"
            alt="..."
            style="height: 200px;"
            />
            <div class="p-3 d-flex flex-column justify-content-between">
              <h4 class="card-title mb-auto">
                {{product.title}}
              </h4>
              <ul class="product-tag mt-3 d-flex ps-0" v-if="product.tag" style="list-style-type: none;">
                <li class="px-2 h5" style="color: #1FBA82;"
                    v-for="(label, key) in product.tag"
                                :key="key+'tag'">
                                {{ label }}
                </li>
              </ul>
            </div>
        </swiper-slide>
      </swiper>
    </div>
    <ul class="home-products text-light container mt-5" style="list-style-type: none;">
      <li v-for="product in homeProducts" :key="product.id" class="mb-5">
        <div class="home-product position-relative row d-flex">
          <img class="col-md-7" :src="product.imageUrl" alt="">
          <div class="home-product-content top-50 end-0 col-11 col-md-6 p-4"
          style="background: rgba(55, 55, 55, 0.4); backdrop-filter: blur(6px);">
            <h5 class="d-inline-block mb-3"
                style="padding: 8px 12px; background: rgba(10, 96, 60, 0.8); z-index:3">
              {{ product.tag[0] }}</h5>
            <h5 class="d-inline-block ms-3" style="color: #1FBA82;">{{ product.category }}</h5>
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <RouterLink :to="`/product/${product.id}`" style="text-decoration: none; color: inherit;">
              <button type="button" class="btn btn-outline-primary link-light">查看更多</button></RouterLink>
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
import productsStore from '../../stores/productsStore'
import { mapState } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProductsStore = productsStore()

export default {
  data () {
    return {
      modules: [Navigation, Pagination, Autoplay]
    }
  },
  computed: {
    ...mapState(productsStore, ['hotHomeProducts', 'homeProducts', 'latestProducts'])
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {
    ProductsStore.getAllProducts()
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
@media(max-width: 768px) {
    .swiper-slide{
    padding: 32px;
  }
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
.hotlist{
  position: relative;
  background-image: url(@/images/home/BG-HOT@3x.png);
  background-size: cover;
  height: 559px;
}
.hotlist::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.hotlist .content{
  position: relative;
}
.hot:hover{
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.16);
}
.hot .more{
  display: none;
}
.hot:hover .more{
  display: block;
}
.favorite{
  background-image: url(@/images/icon/favorite.svg);
  background-repeat: no-repeat;
  background-position: center center;
}
.favorite:hover{
  background-image: url(@/images/icon/favorite-hover.svg);
}
.home-products li:nth-child(even) .home-product{
  flex-direction: row-reverse !important;
}
.home-products li:nth-child(even) .home-product-content{
  left: 0 !important;
}
.home-products .home-product-content{
  position: absolute;
  transform: translateY(-50%)
}
@media(max-width: 768px) {
  .home-products .home-product-content{
  position: relative;
  transform: translateY(0%)
  }
  .home-product img{
    margin: -16px 0px;
  }
  .home-product{
    justify-content: center
  }
}
.swiper-slide { height:auto}

.product-tag li{
  border-left: 1px solid #1FBA82;
}
.product-tag li:first-child{
  border-left: 0px solid #1FBA82;
  padding-left: 0px !important;
}
</style>
