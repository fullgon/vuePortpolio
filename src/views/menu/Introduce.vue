<template>
  <div class="container" style="background-image: url(image/headerPaper.jpg)">
    <v-layout class="image-container" wrap>
      <div class="image-box">
        Hi I'm Gon<br />
        I'm an illustrator based in the United Kingdom with an affinity for
        colour and a sensitive disposition.<br />
        My tools of choice are my trusty pentel brush pen, faber-catell
        polychromos, photoshop and procreate. I like to bring texture, colour
        and a bit of tongue-in-cheek humour to my work and particularly enjoy
        drawing people all different shapes and sizes.<br />
        When I'm not drawing I'll often think about dismantling the patriarchy,
        what I’ll be having for breakfast the next day, and cats.<br />
      </div>

      <div class="image-box-right">
        <img class="img" src="image/headerPaper.jpg" />
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
  border: solid;
  display: flex;
}

.image-box {
  width: 40%;
  padding: 5%;
  border: solid;
}

.image-box-right {
  width: 40%;
  padding: 5%;
  border: solid;
}

.img {
  width: 100%;
  height: 100%;
  border: solid white;
}
</style>