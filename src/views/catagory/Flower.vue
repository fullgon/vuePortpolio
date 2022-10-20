<template>
  <div class="container" style="background-image: url(image/headerPaper.jpg)">
    <v-layout class="image-container" wrap>
      <div class="image-box">
        <img class="img" src="image/flower/flower1.jpg" />
      </div>

      <div class="image-box-right">
        <img class="img" src="image/flower/flower2.jpg" />
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
  height: fill;
  background-size: cover;
  background-position: center center;
}

.image-container {
  width: fill;
  padding: 2% 5% 0% 5%;
  border: solid;
  display: flex;
}

.image-box {
  width: 60%;
  padding: 5%;
}

.image-box-right {
  width: 60%;
  padding: 5%;
  margin-left: 40%;
}

.img {
  width: 100%;
  height: 100%;
  border: solid white;
}
</style>