<template>
  <div>
    <Swiper class="swiper" :options="swiperOption">
      <SwiperSlide
        class="slide"
        data-aos="fade-in"
        data-aos-duration="1100"
        style="background-image: url(image/top1.jpg)"
      >
        <v-layout
          data-aos="fade-up"
          data-aos-duration="1100"
          fill-height
          align-center
          justify-center
        >
          <div class="slog">문형곤</div>
        </v-layout>
      </SwiperSlide>
      <SwiperSlide class="slide" style="background-image: url(image/top2.jpg)">
        <v-layout fill-height align-center justify-center>
          <div class="slog">행복하게</div>
        </v-layout>
      </SwiperSlide>
      <SwiperSlide class="slide" style="background-image: url(image/top3.jpg)">
        <v-layout fill-height align-center justify-center>
          <div class="slog">즐겁게</div>
        </v-layout>
      </SwiperSlide>
    </Swiper>
    <div class="section">
      <div class="header">그림 목록</div>
      <v-layout wrap>
        <v-flex
          xs4
          class="pa-2 pointer"
          data-aos="fade-right"
          @click="goPortpolio"
          @mouseover="mouseOver = true"
          @mouseleave="mouseOver = false"
        >
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            :style="`background-image: url(image/${img})`"
          >
            <v-layout fill-height align-center justify-center>
              <div v-if="mouseOver" class="list-font" data-aos="fade-up">
                인물
              </div>
            </v-layout>
          </v-responsive>
        </v-flex>

        <v-flex xs4 class="pa-2" data-aos="fade-down">
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            style="background-image: url(image/top1.jpg)"
          >
            <v-layout fill-height align-center justify-center>
              <div v-if="mouseOver" class="list-font" data-aos="fade-up">
                사물
              </div>
            </v-layout>
          </v-responsive>
        </v-flex>

        <v-flex xs4 class="pa-2" data-aos="fade-left">
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            style="background-image: url(image/top2.jpg)"
          >
            <v-layout fill-height align-center justify-center>
              <div class="list-font">꽃</div>
            </v-layout>
          </v-responsive>
        </v-flex>

        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            style="background-image: url(image/top3.jpg)"
          >
            <v-layout fill-height align-center justify-center>
              <div class="list-font">
                풍경<span style="font-size: 25px">(小)</span>
              </div>
            </v-layout>
          </v-responsive>
        </v-flex>

        <v-flex xs4 class="pa-2" data-aos="fade-down">
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            style="background-image: url(image/top3.jpg)"
          >
            <v-layout fill-height align-center justify-center>
              <div class="list-font">
                풍경<span style="font-size: 25px">(大)</span>
              </div>
            </v-layout>
          </v-responsive>
        </v-flex>

        <v-flex xs4 class="pa-2" data-aos="fade-left">
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            style="background-image: url(image/top3.jpg)"
          >
            <v-layout fill-height align-center justify-center>
              <div class="list-font">연습</div>
            </v-layout>
          </v-responsive>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoPlay: {
          delay: 3000,
        },
      },
      mouseOver: false,
      img: "top3.jpg",
    };
  },
  mounted() {
    AOS.init();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    goPortpolio() {
      this.$router.push("/person");
    },
  },
};
</script>
<style scoped lang="less">
.swiper {
  height: 100vh;
  .slide {
    background-size: cover;
    background-position: center center;
  }
  .slog {
    font-size: 60px;
    font-weight: bold;
    color: white;
  }
}

.section {
  width: 1190px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  .header {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    background-size: cover;
    background-position: center center;
  }

  .list-font {
    font-size: 45px;
    font-weight: bold;
    color: white;
  }

  .pointer {
    cursor: pointer;
  }
}
</style>
