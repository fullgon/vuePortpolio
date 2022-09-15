<template>
  <div>
    <Swiper class="swiper" :options="swiperOption">
      <SwiperSlide class="slide" data-aos="fade-in" data-aos-duration="1100"
      style="background-image:url(/image/top1.jpg)">
      <v-layout data-aos="fade-up" data-aos-duration="1100" fill-height align-center justify-center>
        <div class="slog">명지전문대학 문형곤</div>
      </v-layout>
    </SwiperSlide>
      <SwiperSlide class="slide"
      style="background-image:url(/image/top2.jpg)">
      <v-layout fill-height align-center justify-center>
        <div class="slog">행복하게</div>
      </v-layout>
    </SwiperSlide>
      <SwiperSlide class="slide"
      style="background-image:url(/image/top3.jpg)">
      <v-layout fill-height align-center justify-center>
        <div class="slog">즐겁게</div>
      </v-layout>
    </SwiperSlide>
    </Swiper>
    <div class="section">
      <div class="header">프로젝트 목록</div>
      <v-layout wrap>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive aspect-ratio="1/1">
            <img src="/image/top1.jpg" class="image"/>
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
          <v-responsive aspect-ratio="1/1">
            <img src="/image/top2.jpg" class="image"/>
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive aspect-ratio="1/1">
            <img src="/image/top3.jpg" class="image"/>
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive aspect-ratio="1/1">
            <img src="/image/top1.jpg" class="image"/>
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
          <v-responsive aspect-ratio="1/1">
            <img src="/image/top2.jpg" class="image"/>
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive aspect-ratio="1/1">
            <img src="/image/top3.jpg" class="image"/>
          </v-responsive>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  import AOS from "aos"
  import "aos/dist/aos.css"

  export default {
    name: 'Home',
    data(){
      return{
        swiperOption:{
          loop:true,
          autoPlay:{
            delay:3000
          }
        },
      }
    },
    mounted(){
      AOS.init()
    },
    components:{
      Swiper,
      SwiperSlide,
    }
  }
</script>
<style scoped lang="less">
  .swiper{
    height: 100vh;
    .slide{
      background-size: cover;
      background-position: center center;
    }
    .slog{
      font-size: 60px;
      font-weight: bold;
      color: white;
    }
  }

  .section{
    width: 1190px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    .header{
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
    .image{
      width: 1000px;
      height: 300px;
      object-fit: cover;
    }
  }
</style>
