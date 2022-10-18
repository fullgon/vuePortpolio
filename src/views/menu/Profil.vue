<template>
  <div class="container" style="background-image: url(image/headerPaper.jpg)">
    <v-layout class="image-container" wrap>
      <div class="year">2022</div>
      <div class="image-box-right">비룡소 캐릭터그림책공모전 대상 수상</div>

      <div class="year">2021</div>
      <div class="image-box-right">
        미국 일러스트레이터협회 선정 올해의 어린이책 일러스트레이션 금상(최고상)
        수상
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.container {
  width: fill;
  height: 100vh;
  background-size: cover;
  background-position: center center;
}

.image-container {
  width: fill;
  padding: 2% 5% 0% 20%;
  //   border: solid;
  display: flex;
}

.year {
  width: 20%;
  padding: 5%;
  border: solid;
}

.image-box-right {
  width: 80%;
  padding: 5%;
  border: solid;
}

.img {
  width: 100%;
  height: 100%;
  border: solid white;
}
</style>