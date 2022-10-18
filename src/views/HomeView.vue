<template>
  <div>
    <Swiper class="swiper" :options="swiperOption">
      <SwiperSlide
        class="slide"
        data-aos="fade-in"
        data-aos-duration="1100"
        style="background-image: url(image/bigScenery/big_scenery4.jpg)"
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
      <SwiperSlide
        class="slide"
        style="background-image: url(image/object/object1.jpg)"
      >
        <v-layout fill-height align-center justify-center>
          <div class="slog">행복하게</div>
        </v-layout>
      </SwiperSlide>
      <SwiperSlide
        class="slide"
        style="background-image: url(image/practice/practice1.jpg)"
      >
        <v-layout fill-height align-center justify-center>
          <div class="slog">즐겁게</div>
        </v-layout>
      </SwiperSlide>
    </Swiper>
    <div class="section">
      <div class="header">카테고리</div>
      <v-layout wrap>
        <v-flex
          xs4
          class="pa-2 pointer"
          v-for="(picture, index) in pictureList"
          v-bind:key="index"
          :data-aos="picture.animation"
          @click="goCategory(picture.path)"
          @mouseover="picture.mouseOver = true"
          @mouseleave="picture.mouseOver = false"
        >
          <v-responsive
            aspect-ratio="1/1"
            class="image"
            :style="`background-image: url(image/${picture.img})`"
          >
            <v-layout fill-height align-center justify-center>
              <div
                v-if="picture.mouseOver"
                class="list-font"
                data-aos="fade-up"
              >
                {{ picture.category }}
              </div>
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
      pictureList: [
        {
          path: "/character",
          category: "인물",
          img: "character/character1.jpg",
          animation: "fade-right",
          mouseOver: false,
        },
        {
          path: "/object",
          category: "사물",
          img: "object/object1.jpg",
          animation: "fade-down",
          mouseOver: false,
        },
        {
          path: "/flower",
          category: "꽃",
          img: "flower/flower1.jpg",
          animation: "fade-left",
          mouseOver: false,
        },
        {
          path: "/smallscenery",
          category: "小풍경",
          img: "smallScenery/small_scenery1.jpg",
          animation: "fade-right",
          mouseOver: false,
        },
        {
          path: "/bigscenery",
          category: "大풍경",
          img: "bigScenery/big_scenery1.jpg",
          animation: "fade-down",
          mouseOver: false,
        },
        {
          path: "/practice",
          category: "연습",
          img: "practice/practice1.jpg",
          animation: "fade-left",
          mouseOver: false,
        },
      ],
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
    goCategory(path) {
      this.$router.push(path);
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
    color: darkblue;
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
    color: black;
  }

  .pointer {
    cursor: pointer;
  }
}
</style>
